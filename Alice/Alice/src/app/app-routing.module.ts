import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ColaboradoresComponent} from './colaboradores/colaboradores.component';
import {ProjetosComponent} from './projetos/projetos.component';
import {PublicacoesComponent} from './publicacoes/publicacoes.component';
import {LoginscreenComponent} from './loginscreen/loginscreen.component';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './loginscreen/login-auth.guard';

const routes: Routes = [
  { path: '', component: LoginscreenComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'colaboradores', component: ColaboradoresComponent, data : {title: 'Lista'}, canActivate: [AuthGuard] },
  { path: 'projetos', component: ProjetosComponent, data : {title: 'Lista'}, canActivate: [AuthGuard]},
  {path: 'publicacoes', component: PublicacoesComponent, data : {title: 'Lista'},canActivate: [AuthGuard]},
  { path: 'loginscreen', component: LoginscreenComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
