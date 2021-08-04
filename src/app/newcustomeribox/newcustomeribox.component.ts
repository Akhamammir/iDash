import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../phone';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IboxService } from '../SERVICES/ibox.service';
@Component({
  selector: 'app-newcustomeribox',
  templateUrl: './newcustomeribox.component.html',
  styleUrls: ['./newcustomeribox.component.styl']
})
export class NewcustomeriboxComponent implements OnInit {
  id: string = '';
  name: string = '';
  country: string = 'México';
  first: string = '';
  second: string = '';
  postalCode: string = '';
  city: string = '';
  state: string = '';
  email: string = '';
  typePhone: string = '';
  code: string = '';
  number: string = '';
  forma1583: string = '';
  notiemail: string = '';
  notisms: string = '';
  LoginForm: FormGroup | undefined;
  constructor(private AR: ActivatedRoute,private iboxService: IboxService) { }
  phones: Phone[] = [];
  selectedValuesCustomerIbox: string[] = [];
  ngOnInit(): void {
    this.phones = [
      { name: 'Celular' },
      { name: 'Fijo' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!

    this.LoginForm = new FormGroup({
      name:  new FormControl(this.name,[Validators.required]),
      country: new FormControl(this.country,[Validators.required]),
      first: new FormControl(this.first,[Validators.required]),
      second: new FormControl(this.second,[Validators.required]),
      postalCode: new FormControl(this.postalCode,[Validators.required]),
      city: new FormControl(this.city,[Validators.required]),
      state: new FormControl(this.state,[Validators.required]),
      email: new FormControl(this.email,[Validators.required]),
      typePhone: new FormControl(this.typePhone,[Validators.required]),
      code: new FormControl(this.code,[Validators.required]),
      number: new FormControl(this.number,[Validators.required]),
      forma1583: new FormControl(this.forma1583,[Validators.required]),
      notiemail: new FormControl(this.notiemail,[Validators.required]),
      notisms: new FormControl(this.notisms,[Validators.required]),
    })
  }
  onSubmit() {
    const data = this.LoginForm!.value
    console.log(data)
    this.iboxService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
