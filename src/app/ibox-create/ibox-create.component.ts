import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ClientesService } from '../Services/clientes.service';
import { HelpersService } from '../Services/helpers.service';
import { IboxService } from '../Services/ibox.service';

@Component({
  selector: 'app-ibox-create',
  templateUrl: './ibox-create.component.html',
  styleUrls: ['./ibox-create.component.styl']
})
export class IboxCreateComponent implements OnInit {
  id: any
  meses: any
  pesos: any
  status: any
  text: string = '';
  ibox: any
  newEboxForm: FormGroup | undefined;
  results: string[] = [];
  userList: any
  nameCustomer: any
  codigoCliente: any
  filteredUsers: any;
  valuePrice: any;
  storeList: any;
  dateValue: Date = new Date();
  selectedStore: any;
  selectedMonth: any = null;
  editMode: boolean = false;
  selectedPlan: any = null;
  cliente: any
  constructor(private AR: ActivatedRoute, private clienteService: ClientesService, private helpService: HelpersService, private iboxService: IboxService, private toastrService: NbToastrService, private fb: FormBuilder, private router: Router) {
    this.meses = [
      { name: '1 mes', value: 1 },
      { name: '2 meses', value: 2 },
      { name: '3 meses', value: 3 },
      { name: '4 meses', value: 4, },
      { name: '5 meses', value: 5 },
      { name: '6 meses', value: 6 },
      { name: '7 meses', value: 7, },
      { name: '8 meses', value: 8 },
      { name: '9 meses', value: 9 },
      { name: '10 meses', value: 10 },
      { name: '11 meses', value: 11 },
      { name: '12 meses', value: 12 },
    ];
    this.pesos = [
      { name: '1 kg', value: 1 },
      { name: '2 kg', value: 2 },
      { name: '4 kg', value: 4 },
      { name: '7 kg', value: 7 },
      { name: '12 kg', value: 12 },
    ];
    this.status = [
      { name: 'Activo', },
      { name: 'Vencido' },
      { name: 'Renovacion' },
    ];
  }
  checkingEditMode(): void {
    this.AR.queryParams.subscribe(params => {
      if (params['id'] !== undefined) {
        console.log(({ id: params['id'] }))
        this.id = params['id']
        this.editMode = true
        this.getIbox(params['id'])
      }
    })
  }
  ngOnInit(): void {

    this.gettingUsers()
    this.createForm()
    this.gettingStores()
    this.checkingEditMode()
  }
  createForm() {
    this.newEboxForm = this.fb.group({
      users: new FormControl('', Validators.required),
      noIbox: new FormControl('', Validators.required),
      idioma: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      meses: new FormControl('', Validators.required),
      comentarios: new FormControl('', Validators.required),
      vencimento: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      tiendaDestino: new FormControl(this.selectedStore, Validators.required),

    })
  }

  gettingUsers() {
    this.clienteService.getClientes()
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.userList = response.data.getClientes
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });
  }
  getIbox(id: any) {
    let body = {
      getIboxId: id
    }
    this.iboxService.getIbox(body)
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.ibox = response.data.getIbox;

            this.getCliente(this.ibox.codigoCliente)
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
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

            this.gettingStores()
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  edit() {

    if (this.storeList && this.cliente) {
      this.nameCustomer = [this.cliente]
      this.selectedStore = this.ibox.tiendaDestino
      this.newEboxForm?.patchValue({
        users: [this.cliente],
        noIbox: this.ibox.noIbox,
        idioma: this.ibox.idioma,
        plan: parseInt(this.ibox.plan),
        status: this.ibox.status,
        meses: parseInt(this.ibox.meses),
        comentarios: this.ibox.comentarios,
        vencimento: this.ibox.vencimento,
        precio: parseInt(this.ibox.precio),
        tiendaDestino: this.ibox.tiendaDestino
      })
      console.log(this.newEboxForm?.value, 'value');
    }
  }
  gettingStores() {
    this.helpService.getStores()
      .subscribe(
        response => {
          console.log(response, 'stores')
          if (!response.errors) {
            this.storeList = response.data.getCatTiendas
            this.editMode ? this.edit() : null
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });
  }
  selectedAutocompleteUser() {
    console.log(this.nameCustomer)

  }
  optionSelected() {
    console.log(this.selectedStore)
    let body = {
      code: this.selectedStore
    }
    this.helpService.getPrice(body)
      .subscribe(
        response => {
          console.log(response, 'sdfsdfdf')
          if (!response.errors) {
            this.valuePrice = response.data.getCatEboxPreciosByCode
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });


  }
  gettingPriceIbox() {
    if (this.selectedMonth && this.selectedPlan) {
      console.log(this.selectedPlan)
      this.selectingMonth()
      switch (this.selectedPlan) {
        case 1:
          if (this.selectedMonth < 6) {
            console.log(parseInt(this.valuePrice.precio1_1) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio1_1) * this.selectedMonth
            })
          } else if (this.selectedMonth > 6) {
            console.log(parseInt(this.valuePrice.precio1_2) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio1_2) * this.selectedMonth
            })
          }
          break;
        case 2:
          if (this.selectedMonth < 6) {
            console.log(parseInt(this.valuePrice.precio2_1) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio2_1) * this.selectedMonth
            })
          } else if (this.selectedMonth > 6) {
            console.log(parseInt(this.valuePrice.precio2_2) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio2_2) * this.selectedMonth
            })
          }
          break;
        case 4:
          if (this.selectedMonth < 6) {
            console.log(parseInt(this.valuePrice.precio4_1) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio4_1) * this.selectedMonth
            })
          } else if (this.selectedMonth > 6) {
            console.log(parseInt(this.valuePrice.precio4_2) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio4_2) * this.selectedMonth
            })
          }
          break;
        case 7:
          if (this.selectedMonth < 6) {
            console.log(parseInt(this.valuePrice.precio7_1) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio7_1) * this.selectedMonth
            })
          } else if (this.selectedMonth > 6) {
            console.log(parseInt(this.valuePrice.precio7_2) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio7_2) * this.selectedMonth
            })
          }
          break;
        case 12:
          if (this.selectedMonth < 6) {
            console.log(parseInt(this.valuePrice.precio12_1) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio12_1) * this.selectedMonth
            })
          } else if (this.selectedMonth > 6) {
            console.log(parseInt(this.valuePrice.precio12_2) * this.selectedMonth)
            this.newEboxForm?.patchValue({
              precio: parseInt(this.valuePrice.precio12_2) * this.selectedMonth
            })
          }
          break;

        default:
          break;
      }
    }
  }
  selectingMonth() {
    this.dateValue = new Date();
    this.dateValue.setMonth(this.dateValue.getMonth() + this.selectedMonth - 1)

  }
  onSubmit() {
    const data = this.newEboxForm!.value
    console.log(data)
    if (!this.editMode) {
      data.users.forEach((element: any) => {
        let body = {
          input: {
            noIbox: data.noIbox,
            nombreCliente: element.first_name,
            codigoCliente: element.id,
            idioma: data.idioma,
            meses: data.meses.toString(),
            plan: data.plan.toString(),
            status: data.status,
            comentarios: data.comentarios,

            vencimento: `${data.vencimento.getMonth() + 1}/${data.vencimento.getDate()}/${data.vencimento.getFullYear()}`,
            tiendaDestino: this.selectedStore,
            precio: data.precio.toString(),
          }
        }
        console.log(body)
        this.iboxService.create(body)
          .subscribe(
            response => {
              console.log(response, 'sdfsdfdf')
              if (!response.errors) {
                this.showToast('Creado Correctamente')
              } else {
                console.log(response.errors[0].message, 'danger')
              }
            });
      });
      this.router.navigate([`in/${this.id}/ebox`]);

    } else {
      console.log(data)
    }

  }
  filterUser(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.userList.length; i++) {
      let user = this.userList[i];

      if (user.first_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      } else if (user.last_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(user);
      }
    }
    console.log(filtered)
    this.filteredUsers = filtered;
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
