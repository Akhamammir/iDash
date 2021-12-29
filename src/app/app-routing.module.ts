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
import { CustormerDashComponent } from './custormer-dash/custormer-dash.component';
import { ValijacreadaComponent } from './valijacreada/valijacreada.component';
import { SellpackageComponent } from './sellpackage/sellpackage.component';
import { ExitopackageComponent } from './exitopackage/exitopackage.component';
import { DocumentlegaleboxComponent } from './documentlegalebox/documentlegalebox.component';
import { MainCustomerComponent } from './main-customer/main-customer.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { ValijaListComponent } from './valija-list/valija-list.component';
import { ClientesComponent } from './clientes/clientes.component';
import { IboxCreateComponent } from './ibox-create/ibox-create.component';
const routes: Routes = [
  {
    path: '', component: LoginComponent, pathMatch: 'full',
  }, {
    path: 'in/:id', component: MainComponent, children: [
      { path: '', redirectTo: 'dash', pathMatch: 'full' },
      {
        path: 'dash', component: DashComponent,
      },
      {
        path: 'features', component: FeaturesComponent,
      },
      {
        path: 'prices', component: PricesComponent,
      },
      {
        path: 'customer', component: CustomerComponent,
      },
      {
        path: 'process', component: ProcessComponent,
      },
      {
        path: 'confirmation', component: ConfirmacionComponent,
      },
      {
        path: 'package', component: PackageComponent,
      },
      {
        path: 'ebox', component: IboxComponent,
      },
      {
        path: 'ebox/new', component: IboxCreateComponent,
      },
      {
        path: 'newcustomerebox', component: NewcustomeriboxComponent,
      },
      {
        path: 'email', component: OutgoingmailComponent,
      },
      {
        path: 'valija', component: ValijaComponent,
      },
      {
        path: 'valija/list', component: ValijaListComponent,
      },
      {
        path: 'exitovalija', component: ValijacreadaComponent,
      },
      {
        path: 'sellingpackage', component: SellpackageComponent,
      },
      {
        path: 'exitopackage', component: ExitopackageComponent,
      },
      {
        path: 'documentolegal', component: DocumentlegaleboxComponent,
      },
      {
        path: 'clientes', component: ClientesComponent,
      },
    ]
  },
  {
    path: 'sideClient/:id', component: MainCustomerComponent, children: [
      {
        path: 'dash', component: CustormerDashComponent,
      },
      {
        path: 'cotizar', component: CotizarComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
