import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { CrearEntregaComponent } from './crear-entrega/crear-entrega.component';
import { EditarEntregaComponent } from './editar-entrega/editar-entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    BarraNavegacionComponent,
    ConsultaClienteComponent,
    CrearEntregaComponent,
    EditarEntregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
