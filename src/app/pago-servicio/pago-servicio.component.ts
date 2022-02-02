import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { IboxService } from '../Services/ibox.service';

@Component({
  selector: 'app-pago-servicio',
  templateUrl: './pago-servicio.component.html',
  styleUrls: ['./pago-servicio.component.styl']
})
export class PagoServicioComponent implements OnInit {

  constructor(private iboxService: IboxService, private AR: ActivatedRoute, private toastrService: NbToastrService, private router: Router) { }
  tipoPago: string = 'Pago en Efectivo'
  accion: string = ''
  divisas: any
  tarjetas: any
  tipo: any
  service: any
  data: any
  cambio: any
  concurrency: string = 'MXN'
  aux: any = null
  loading: boolean = false;
  hoy: Date = new Date()
  LoginForm: FormGroup | undefined;
  ngOnInit(): void {
    this.divisas = [
      { name: 'dolares', value: 'USD' },
      { name: 'pesos', value: 'MXN' },
    ]
    this.tarjetas = [
      { name: 'Debito', value: 'DEBITO' },
      { name: 'Crédito', value: 'CREDITO' },
    ]

    this.createForm()
    this.checkingType()
    this.llenardatos()
    this.tipo === 'ibox' ? this.accion = 'I-box' : this.accion = 'Paquetes'
    this.service === 'ef' ? this.tipoPago = 'Pago en Efectivo' : this.tipoPago = 'Pago con tarjeta'

    this.cambio = "MXN"
  }
  checkingType(): void {
    this.AR.queryParams.subscribe(params => {
      if (params['tipo'] !== undefined) {
        this.tipo = params['tipo']
      }
      if (params['service'] !== undefined) {
        this.service = params['service']
      }
    })
  }
  createForm(): void {
    this.LoginForm = new FormGroup({
      tipoCambio: new FormControl(''),
      tipoDivisa: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required),
      cantidadRecibida: new FormControl(null),
      cambio: new FormControl(null),
      digitos: new FormControl(null),
      tipoTarjeta: new FormControl(null),
      ticket: new FormControl(null),
      enviaFactura: new FormControl(false)
    })
  }
  llenardatos() {
    this.iboxService.iboxEmmittet.subscribe(
      data => {
        this.data = data;
      }
    );
    this.data = JSON.parse(localStorage.getItem('data')!)
    this.data.vencimento = new Date(new Date(this.data.vencimento).valueOf())
    this.rellenarForm()
  }
  cambiarDivisa(envt: any) {
    if (envt === 'pesos') {
      this.concurrency = 'MXN'
      this.LoginForm?.patchValue({
        tipoDivisa: 'MXN'
      })
    } else {
      this.concurrency = 'USD'
      this.LoginForm?.patchValue({
        tipoDivisa: 'USD'
      })
    }
    console.log(envt)
  }
  rellenarForm() {
    this.LoginForm?.patchValue({
      total: this.data.precio,
      tipoDivisa: 'MXN'
    })
  }
  calcularCambioDivision(event: any) {
    this.aux = this.data.precio * event
    this.LoginForm?.patchValue({
      total: this.aux,
    })
  }

  calcularCambio(event: any) {
    if (!this.aux) {
      if (event > this.data.precio) {
        this.LoginForm?.patchValue({
          cambio: event - this.data.precio
        })
      } else {
        this.LoginForm?.patchValue({
          cambio: 0.00
        })
      }
    } else {
      if (event > this.aux) {
        this.LoginForm?.patchValue({
          cambio: event - this.aux
        })
      } else {
        this.LoginForm?.patchValue({
          cambio: 0.00
        })
      }
    }

  }

  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
    this.crearIbox()
    this.creaTicket(data)


  }
  crearIbox() {
    let body = {
      input: {
        noIbox: this.data.noIbox,
        nombreCliente: this.data.users.first_name,
        codigoCliente: this.data.users.id,
        idioma: this.data.idioma,
        meses: this.data.meses.toString(),
        plan: this.data.plan.toString(),
        status: this.data.status,
        comentarios: this.data.comentarios,
        vencimento: `${this.data.vencimento.getMonth() + 1}/${this.data.vencimento.getDate()}/${this.data.vencimento.getFullYear()}`,
        tiendaDestino: this.data.tiendaDestino,
        precio: this.data.precio.toString(),
      }
    }
    console.log(body, 'crearIbox')
    this.iboxService.create(body)
      .subscribe(
        response => {
          if (!response.errors) {
            this.showToast('Creado Correctamente')
            console.log(response, 'Ibox');
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });

  }
  creaTicket(data: any) {
    let body = {
      input: {
        tipoPago: this.service === 'ef' ? 'EFECTIVO' : 'TARJETA',
        idPaquete: null,
        idCliente: this.data.users.id,
        idIbox: this.data.noIbox,
        tipoCambio: data.tipoCambio.toString(),
        tipoDivisa: data.tipoDivisa,
        totalPago: data.total.toString(),
        enviaFactura: data.enviaFactura,
        detalleTipoPago: {
          numeroTarjeta: data.digitos,
          numeroTicket: data.ticket,
          tipoTarjeta: data.tipoTarjeta,
          cambio: data.cambio.toString(),
          cantidadRecibida: data.cantidadRecibida.toString()
        },
        datosTicket: {
          nombreCliente: this.data.users.first_name + ' ' + this.data.users.last_name,
          codigo: this.data.users.id,
          fechaInicio: `${this.hoy.getMonth() + 1}/${this.hoy.getDate()}/${this.hoy.getFullYear()}`,
          fechaRenovacion: this.data.status === 'Renovacion' ? `${this.hoy.getMonth() + 1}/${this.hoy.getDate()}/${this.hoy.getFullYear()}` : null,
          fechaVencimiento: `${this.data.vencimento.getMonth() + 1}/${this.data.vencimento.getDate()}/${this.data.vencimento.getFullYear()}`,
          mesesContratados: this.data.meses.toString(),
          plan: this.data.plan.toString(),
          costo: this.data.precio.toString(),
        }
      }
    }
    console.log(body, 'crearTicket')
    this.loading = true;
    this.iboxService.registrarPagoIbox(body)
      .subscribe(
        response => {
          if (!response.errors) {
            this.showToast('Creado Correctamente')
            console.log(response, 'Ticket');
            localStorage.removeItem('data')
            localStorage.setItem('url', JSON.stringify(response.data.registraPago))

            this.router.navigate([`in/${localStorage.getItem('id')}/exito`], { queryParams: { tipo: this.tipo } });
            this.loading = false;
          } else {
            console.log(response.errors[0].message, 'danger')
          }
        });
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
