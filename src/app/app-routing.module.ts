import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaDashboardComponent } from './vista-dashboard/vista-dashboard.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { LoginComponent } from './login/login.component';
import { CrearEntregaComponent } from './crear-entrega/crear-entrega.component';
import { EditarEntregaComponent } from './editar-entrega/editar-entrega.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: VistaDashboardComponent},
  {path: 'cliente/anadirCliente', component: CrearClienteComponent},
  {path: 'cliente/editarCliente', component: EditarClienteComponent},
  {path: 'cliente/consultarClientes', component: ConsultaClienteComponent},
  {path: 'entrega', component: ConsultaClienteComponent},
  {path: 'entrega/crearEntrega', component: CrearEntregaComponent},
  {path: 'entrega/editarEntrega', component: EditarEntregaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
