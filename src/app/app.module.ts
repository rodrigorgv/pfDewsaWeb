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
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { VistaDashboardComponent } from './vista-dashboard/vista-dashboard.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { CrearVentaComponent } from './crear-venta/crear-venta.component';
import { CrearNotacComponent } from './crear-notac/crear-notac.component';
import { EditarVentaComponent } from './editar-venta/editar-venta.component';
import { ConsultaEntregaComponent } from './consulta-entrega/consulta-entrega.component';
import { HistorialEntregaComponent } from './historial-entrega/historial-entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    BarraNavegacionComponent,
    ConsultaClienteComponent,
    CrearEntregaComponent,
    EditarEntregaComponent,
    BarraLateralComponent,
    VistaDashboardComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    CrearVentaComponent,
    CrearNotacComponent,
    EditarVentaComponent,
    ConsultaEntregaComponent,
    HistorialEntregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
