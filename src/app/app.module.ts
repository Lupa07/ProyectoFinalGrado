import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { DatosComponent } from './componentes/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FiltrosComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
