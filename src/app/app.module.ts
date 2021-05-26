import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashComponent } from './dash/dash.component';

import { NbButton, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule, NbThemeModule, NbStepperModule } from '@nebular/theme';

import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';


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

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FormsModule,HttpClientModule,

    ButtonModule, PanelMenuModule, DividerModule, InputTextModule,
    DropdownModule, NbStepperModule, RadioButtonModule, CheckboxModule,
    InputMaskModule,ToastModule,CardModule,KeyFilterModule,TableModule,

    NbThemeModule.forRoot({ name: 'corporate' }), NbSidebarModule.forRoot(),
    NbLayoutModule, NbCardModule, NbInputModule, NbSidebarModule, NbEvaIconsModule,
    NbIconModule, NbButtonModule, StepsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
