import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  usrNo:string='';

  constructor(private R:Router) { }

  ngOnInit(): void {
  }

  Forward(){
    let usr:any = 'cookies', access:number=0, i:number=0;
     this.usrNo.split('').forEach( (x, y) => {
      i++;
      ( x.charCodeAt(0) ^ usr.charCodeAt(y) ) === 0 ? '' : access++;
      if(i === this.usrNo.split('').length) {
         (!access) ?  this.R.navigate(['in/dash', this.usrNo]) : console.log('Not in!')
      }
    } )
  }

}
