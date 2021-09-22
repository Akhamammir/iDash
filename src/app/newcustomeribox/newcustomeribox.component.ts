import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../phone';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../SERVICES/customer.service';
import { NotificationB } from '../customer';


@Component({
  selector: 'app-newcustomeribox',
  templateUrl: './newcustomeribox.component.html',
  styleUrls: ['./newcustomeribox.component.styl']
})
export class NewcustomeriboxComponent implements OnInit {
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  country: string = 'México';
  address: string = '';
  second_address: string = '';
  post_cod: string = '';
  city: string = '';
  state: string = '';
  email: string = '';
  services: string = '';
  col: string = '';
  phone: string = '';
  form_1583: boolean = false;
  notifications: NotificationB | undefined
  notiemail: Boolean = false;
  notisms: Boolean = false;
  LoginForm: FormGroup | undefined;
  constructor(private fb: FormBuilder, private AR: ActivatedRoute, private customerService: CustomerService) { }
  phones: Phone[] = [];
  selectedValuesCustomerIbox: string[] = [];
  ngOnInit(): void {
    this.phones = [
      { name: 'Celular' },
      { name: 'Fijo' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!

    this.LoginForm = new FormGroup({
      first_name: new FormControl(this.first_name, Validators.required),
      last_name: new FormControl(this.last_name, Validators.required),
      country: new FormControl(this.country, Validators.required),
      address: new FormControl(this.address, Validators.required),
      second_address: new FormControl(this.second_address, Validators.required),
      post_cod: new FormControl(this.post_cod, Validators.required),
      city: new FormControl(this.city, Validators.required),
      state: new FormControl(this.state, Validators.required),
      email: new FormControl(this.email, Validators.required),
      services: new FormControl(this.services, Validators.required),
      col: new FormControl(this.col, Validators.required),
      phone: new FormControl(this.phone, Validators.required),
      form_1583: new FormControl(this.form_1583, Validators.required),
      notifications: this.fb.group({
        notiemail: new FormControl(this.notiemail, Validators.required),
        notisms: new FormControl(this.notisms, Validators.required),
      })
    })
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
    let body = {
      insertClienteEboxInput: {
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
        notifications: {
          email: data.notifications.notiemail,
          sms: data.notifications.notisms
        }
      }
    }

    console.log(body)
    this.customerService.create(body)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
