import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent} from './proyectos/proyectos.component';
import { QuienessomosComponent} from './quienessomos/quienessomos.component';
import { InicioComponent} from './inicio/inicio.component';
import { CreaunacolectaComponent} from './creaunacolecta/creaunacolecta.component';
import {ComodonarComponent} from './comodonar/comodonar.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component'


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },

  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'quienessomos',
    component: QuienessomosComponent
  },
  {
    path: 'comodonar',
    component: ComodonarComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
 
  {
  path: 'creaunacolecta',
  component: CreaunacolectaComponent
  },
 
  {
    path: 'contacto',
    component: ContactoComponent
    },
    {
      path: 'login',
      component: LoginComponent
      },

  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
 
})

export class AppRoutingModule { }
