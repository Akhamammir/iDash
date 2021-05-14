import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashComponent } from './dash/dash.component';

import { NbButton, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FormsModule,

    ButtonModule,PanelMenuModule,DividerModule,InputTextModule,
    DropdownModule,
    
    NbThemeModule.forRoot({name:'corporate'}), NbSidebarModule.forRoot(),
    NbLayoutModule, NbCardModule, NbInputModule,NbSidebarModule, NbEvaIconsModule,
    NbIconModule, NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
