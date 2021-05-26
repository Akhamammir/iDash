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
import { PackageComponent } from './package/package.component';
import { IboxComponent } from './ibox/ibox.component';
import { NewcustomeriboxComponent } from './newcustomeribox/newcustomeribox.component';
import { OutgoingmailComponent } from './outgoingmail/outgoingmail.component';
import { ValijaComponent } from './valija/valija.component';
import { ValijacreadaComponent } from './valijacreada/valijacreada.component';
import { SellpackageComponent } from './sellpackage/sellpackage.component';
import { ExitopackageComponent } from './exitopackage/exitopackage.component';
import { DocumentlegaleboxComponent } from './documentlegalebox/documentlegalebox.component';
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
      {
        path: 'package/:id', component: PackageComponent,
      },
      {
        path: 'ebox/:id', component: IboxComponent,
      },
      {
        path: 'newcustomerebox/:id', component: NewcustomeriboxComponent,
      },
      {
        path: 'email/:id', component: OutgoingmailComponent,
      },
      {
        path: 'valija/:id', component: ValijaComponent,
      },
      {
        path: 'exitovalija/:id', component: ValijacreadaComponent,
      },
      {
        path: 'sellingpackage/:id', component: SellpackageComponent,
      },
      {
        path: 'exitopackage/:id', component: ExitopackageComponent,
      },
      {
        path: 'documentolegal/:id', component: DocumentlegaleboxComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
