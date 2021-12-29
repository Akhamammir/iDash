import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../phone';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../Services/clientes.service';
import { NbToastrService } from '@nebular/theme';
import { HelpersService } from '../Services/helpers.service';



@Component({
  selector: 'app-newcustomeribox',
  templateUrl: './newcustomeribox.component.html',
  styleUrls: ['./newcustomeribox.component.styl']
})
export class NewcustomeriboxComponent implements OnInit {
  id: string = '';
  LoginForm: FormGroup | undefined;
  cliente: any
  editMode: boolean = false
  constructor(private clienteService: ClientesService, private fb: FormBuilder, private AR: ActivatedRoute, private toastrService: NbToastrService, private router: Router, private helperService: HelpersService) { }
  phones: Phone[] = [];
  paises:any
  selectedValuesCustomerIbox: string[] = [];
  ngOnInit(): void {
    this.phones = [
      { name: 'Celular' },
      { name: 'Fijo' }
    ];
    this.AR.queryParams.subscribe(params => {
      if (params['id'] !== undefined) {
        console.log(({ id: params['id'] }))
        this.id = params['id']
        this.getCliente(params['id'])
      }
    })

    this.createForm()
    this.getPais()
  }
  getPais(){
    this.helperService.getPais()
      .subscribe(
        response => {
          console.log(response);
          if (!response.errors) {
              this.paises = response.data.getCatPais
          }
        }
      )
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)

    if (this.editMode) {
      let body = {
        input: {
          phone: data.phone,
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          second_address: data.second_address,
          email: data.email,
          col: data.col,
          services: data.services.name,
          post_cod: data.post_cod,
          state: data.state,
          city: data.city,
          country: data.country,
          form_1583: data.form_1583,
          codigoCliente:data.codigoCliente,
          notifications: {
            email: data.notifications.notiemail,
            sms: data.notifications.notisms
          }
        },
        updateClienteId: this.id
      }
      this.clienteService.updateCliente(body)
        .subscribe(
          response => {
            console.log(response);
            if (!response.errors) {
              this.showToast('Actualizado Correctamente')
              this.router.navigate([`in/${localStorage.getItem('id')!}/clientes`])
            } else {
              this.showToast(response.errors[0].message, 'danger')
            }
          });
    } else {
      let body = {
        input: {
          phone: data.phone,
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          second_address: data.second_address,
          email: data.email,
          col: data.col,
          services: data.services.name,
          post_cod: data.post_cod,
          state: data.state,
          city: data.city,
          country: data.country,
          form_1583: data.form_1583,
          codigoCliente:data.codigoCliente,
          notifications: {
            email: data.notifications.notiemail,
            sms: data.notifications.notisms
          }
        }
      }
      this.clienteService.createCliente(body)
        .subscribe(
          response => {
            if (!response.errors) {
              this.showToast('Creado Correctamente')
              this.router.navigate([`in/${localStorage.getItem('id')!}/clientes`])
            } else {
              this.showToast(response.errors[0].message, 'danger')
            }
            console.log(response);
          });
    }

  }
  createForm() {
    this.LoginForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      second_address: new FormControl('', Validators.required),
      post_cod: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      services: new FormControl('', Validators.required),
      col: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      codigoCliente: new FormControl('', Validators.required),
      form_1583: new FormControl(false,),
      notifications: this.fb.group({
        notiemail: new FormControl(false,),
        notisms: new FormControl(false,),
      })
    })
  }
  getCliente(id: string) {
    let body = {
      getClienteId: id
    }
    this.clienteService.getCliente(body)
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.cliente = response.data.getCliente;
            this.editMode = true
            this.edit()
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  edit() {
    this.LoginForm?.patchValue({
      first_name: this.cliente.first_name,
      last_name: this.cliente.last_name,
      country: this.cliente.country,
      address: this.cliente.address,
      second_address: this.cliente.second_address,
      post_cod: this.cliente.post_cod,
      city: this.cliente.city,
      state: this.cliente.state,
      email: this.cliente.email,
      services: { name: this.cliente.services },
      col: this.cliente.col,
      phone: this.cliente.phone,
      codigoCliente: this.cliente.codigoCliente,
      form_1583: this.cliente.form_1583 ? true : false,
      notifications: this.fb.group({
        notiemail: this.cliente.notifications.notiemail ? true : false,
        notisms: this.cliente.notifications.notisms ? true : false,
      })
    })
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
