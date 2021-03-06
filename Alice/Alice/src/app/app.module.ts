import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './loginscreen/login-auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ColaboradoresComponent,
    ProjetosComponent,
    PublicacoesComponent,
    LoginscreenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
