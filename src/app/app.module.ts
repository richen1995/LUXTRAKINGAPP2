// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Componente raíz
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent // Declarar el componente principal
  ],
  imports: [
    BrowserModule, // Importar el módulo necesario para ejecutar en un navegador
    SharedModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [], // Lista de servicios
  bootstrap: [AppComponent] // Componente raíz para iniciar la aplicación
})
export class AppModule { }