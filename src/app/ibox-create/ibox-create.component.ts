import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  meses: any
  pesos: any
  status: any
  text: string = '';
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
  selectedPlan: any = null;
  constructor(private fb: FormBuilder, private clienteService: ClientesService, private helpService: HelpersService, private iboxService: IboxService,private toastrService: NbToastrService) {
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

  ngOnInit(): void {
    this.gettingUsers()
    this.createForm()
    this.gettingStores()
  }
  createForm() {
    this.newEboxForm = new FormGroup({
      nombreCliente: new FormControl(this.nameCustomer, Validators.required),
      codigoCliente: new FormControl(this.codigoCliente, Validators.required),
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

  gettingStores() {
    this.helpService.getStores()
      .subscribe(
        response => {
          console.log(response, 'stores')
          if (!response.errors) {
            this.storeList = response.data.getCatTiendas
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });
  }
  selectedAutocompleteUser() {
    console.log(this.nameCustomer)
    this.newEboxForm?.patchValue({
      codigoCliente: this.nameCustomer.codigoCliente
    })
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
  onSubmit(){
    const data = this.newEboxForm!.value
    console.log(data)
    let body = {
      input : {
        noIbox: data.noIbox,
        nombreCliente: data.nombreCliente.first_name,
        codigoCliente: data.codigoCliente,
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
