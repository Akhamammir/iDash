import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashComponent } from './dash/dash.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { NbButton, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule, NbThemeModule, NbStepperModule, NbCheckboxModule, NbSelectModule , NbRadioModule, NbToastrModule} from '@nebular/theme';

import {AutoCompleteModule} from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import {ToggleButtonModule} from 'primeng/togglebutton';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FeaturesComponent } from './features/features.component';
import { StepperDetailComponent } from './stepper-detail/stepper-detail.component';
import { PricesComponent } from './prices/prices.component';
import { CustomerComponent } from './customer/customer.component';
import { ProcessComponent } from './process/process.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { PackageComponent } from './package/package.component';
import { IboxComponent } from './ibox/ibox.component';
import { NewcustomeriboxComponent } from './newcustomeribox/newcustomeribox.component';
import { OutgoingmailComponent } from './outgoingmail/outgoingmail.component';


import { ProductService } from './productservice';
import { ValijaComponent } from './valija/valija.component';
import { ValijacreadaComponent } from './valijacreada/valijacreada.component';
import { SellpackageComponent } from './sellpackage/sellpackage.component';
import { ExitopackageComponent } from './exitopackage/exitopackage.component';
import { DocumentlegaleboxComponent } from './documentlegalebox/documentlegalebox.component';
import { CustormerDashComponent } from './custormer-dash/custormer-dash.component';
import { MainCustomerComponent } from './main-customer/main-customer.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { GraphQLModule } from './graphql.module';
import { ValijaListComponent } from './valija-list/valija-list.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashComponent,
    FeaturesComponent,
    StepperDetailComponent,
    PricesComponent,
    CustomerComponent,
    ProcessComponent,
    ConfirmacionComponent,
    PackageComponent,
    IboxComponent,
    NewcustomeriboxComponent,
    OutgoingmailComponent,
    ValijaComponent,
    ValijacreadaComponent,
    SellpackageComponent,
    ExitopackageComponent,
    DocumentlegaleboxComponent,
    CustormerDashComponent,
    MainCustomerComponent,
    CotizarComponent,
    ValijaListComponent,
    ClientesComponent,

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    AutoCompleteModule,
    ButtonModule, PanelMenuModule, DividerModule, InputTextModule,
    DropdownModule, NbStepperModule, RadioButtonModule, CheckboxModule,
    InputMaskModule, ToastModule, CardModule, KeyFilterModule, TableModule, CalendarModule,
    RatingModule, MessagesModule, MessageModule, ChartModule,ToggleButtonModule,

    NbToastrModule.forRoot(),NbThemeModule.forRoot({ name: 'corporate' }), NbSidebarModule.forRoot(),
    NbLayoutModule, NbCardModule, NbInputModule, NbSidebarModule, NbEvaIconsModule,
    NbIconModule, NbButtonModule, StepsModule, NbCheckboxModule,NbSelectModule,
    NbRadioModule,

    MessagesModule,
    GraphQLModule
  ],
  providers: [ProductService, MessagesModule, MessagesModule, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
