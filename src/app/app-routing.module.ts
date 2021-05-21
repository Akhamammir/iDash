import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { MainComponent } from './main/main.component'
import { DashComponent } from './dash/dash.component'
import { FeaturesComponent } from './features/features.component';
import { PricesComponent } from './prices/prices.component';
import { CustomerComponent } from './customer/customer.component';
import { ProcessComponent } from './process/process.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full',
  }, {
    path: 'in', component: MainComponent, children: [
      {
        path: 'dash/:id', component: DashComponent,
      },
      {
        path: 'features/:id', component: FeaturesComponent,
      },
      {
        path: 'prices/:id', component: PricesComponent,
      },
      {
        path: 'customer/:id', component: CustomerComponent,
      },
      {
        path: 'process/:id', component: ProcessComponent,
      },
      {
        path: 'confirmation/:id', component: ConfirmacionComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
