import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../SERVICES/email.service';

@Component({
  selector: 'app-outgoingmail',
  templateUrl: './outgoingmail.component.html',
  styleUrls: ['./outgoingmail.component.styl']
})
export class OutgoingmailComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute, private emailservice: EmailService) { }
  shops: string[] = [];
  countrys: string[] = [];
  destiny: string[] = [];
  extraServices: string[] = [];
  tiendaOrigen: string = "";
  tipoServicioSize: string = "";
  paisDestino: string = "";
  tipoServicio: string = "";
  zonaDestino: string = "";
  tipodeEnvio: string[] = [];
  peso: string = ""
  estampilla: string = ""
  manejo: string = ""
  total: string = ""
  anddressDestiny: string = ""
  codeCustomer: string = ""
  nombreCustomer: string = ""
  descripcion: string = ""
  guiaReferencia: string = ""
  LoginForm: FormGroup | undefined;

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
    this.LoginForm = new FormGroup({
      extraServices: new FormControl(this.extraServices, [Validators.required]),
      tiendaOrigen: new FormControl(this.tiendaOrigen, [Validators.required]),
      tipoServicioSize: new FormControl(this.tipoServicioSize, [Validators.required]),
      paisDestino: new FormControl(this.paisDestino, [Validators.required]),
      tipoServicio: new FormControl(this.tipoServicio, [Validators.required]),
      zonaDestino: new FormControl(this.zonaDestino, [Validators.required]),
      tipodeEnvio: new FormControl(this.tipodeEnvio, [Validators.required]),
      peso: new FormControl(this.peso, [Validators.required]),
      estampilla: new FormControl(this.estampilla, [Validators.required]),
      manejo: new FormControl(this.manejo, [Validators.required]),
      total: new FormControl(this.total, [Validators.required]),
      anddressDestiny: new FormControl(this.anddressDestiny, [Validators.required]),
      codeCustomer: new FormControl(this.codeCustomer, [Validators.required]),
      nombreCustomer: new FormControl(this.nombreCustomer, [Validators.required]),
      descripcion: new FormControl(this.descripcion, [Validators.required]),
      guiaReferencia: new FormControl(this.guiaReferencia, [Validators.required]),
    })
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
       this.emailservice.create(data)
  .subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }
}
