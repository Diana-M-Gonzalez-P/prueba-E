import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    FormComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
