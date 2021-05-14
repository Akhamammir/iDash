import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { DashComponent } from './dash/dash.component'
const routes: Routes = [
  {
    path:'', component:LoginComponent, pathMatch:'full',
  },{
    path:'in', component:MainComponent,children:[
      {
        path:'dash/:id', component:DashComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
