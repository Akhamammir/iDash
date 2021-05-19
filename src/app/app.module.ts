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
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';


import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FeaturesComponent } from './features/features.component';
import { StepperDetailComponent } from './stepper-detail/stepper-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashComponent,
    FeaturesComponent,
    StepperDetailComponent,

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FormsModule,

    ButtonModule, PanelMenuModule, DividerModule, InputTextModule,
    DropdownModule, NbStepperModule,RadioButtonModule,CheckboxModule,
    InputMaskModule,

    NbThemeModule.forRoot({ name: 'corporate' }), NbSidebarModule.forRoot(),
    NbLayoutModule, NbCardModule, NbInputModule, NbSidebarModule, NbEvaIconsModule,
    NbIconModule, NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
