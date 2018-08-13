import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComodonarComponent } from './comodonar/comodonar.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CreaunacolectaComponent } from './creaunacolecta/creaunacolecta.component';
import { LoginComponent } from './login/login.component';
import { BarraflotanteComponent } from './barraflotante/barraflotante.component';
import { NgxPopper } from 'angular-popper';
import { FormularioComponent } from './formulario/formulario.component';
import { ProyecComponent } from './proyec/proyec.component';
import {DataService}from './data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    QuienessomosComponent,
    ProyectosComponent,
    ContactoComponent,
    ComodonarComponent,
    RegistroComponent,
    InicioComponent,
    CreaunacolectaComponent,
    LoginComponent,
    BarraflotanteComponent,
    FormularioComponent,
    ProyecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPopper,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
