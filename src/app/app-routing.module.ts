import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaDashboardComponent } from './vista-dashboard/vista-dashboard.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { LoginComponent } from './login/login.component';
import { CrearEntregaComponent } from './crear-entrega/crear-entrega.component';
import { EditarEntregaComponent } from './editar-entrega/editar-entrega.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { CrearVentaComponent } from './crear-venta/crear-venta.component';
import { CrearNotacComponent } from './crear-notac/crear-notac.component';
import { EditarVentaComponent } from './editar-venta/editar-venta.component';
import { ConsultaEntregaComponent } from './consulta-entrega/consulta-entrega.component';
import { HistorialEntregaComponent } from './historial-entrega/historial-entrega.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: VistaDashboardComponent},
  {path: 'cliente/anadirCliente', component: CrearClienteComponent},
  {path: 'cliente/editarCliente', component: EditarClienteComponent},
  {path: 'cliente/consultarClientes', component: ConsultaClienteComponent},
  {path: 'entrega', component: ConsultaEntregaComponent},
  {path: 'entrega/crearEntrega', component: CrearEntregaComponent},
  {path: 'entrega/editarEntrega', component: EditarEntregaComponent},
  {path: 'producto/consultarProductos', component: ConsultaClienteComponent},
  {path: 'producto/crearProducto', component: CrearProductoComponent},
  {path: 'producto/editarProducto', component: EditarProductoComponent},
  {path: 'venta/crearVenta', component: CrearVentaComponent},
  {path: 'venta/editarVenta', component: EditarVentaComponent},
  {path: 'notaCredito/CrearNotaCredito', component: CrearNotacComponent},
  {path: 'cliente/historialEntrega', component: HistorialEntregaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
