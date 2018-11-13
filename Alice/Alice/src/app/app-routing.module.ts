import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ColaboradoresComponent} from './colaboradores/colaboradores.component';
import {ProjetosComponent} from './projetos/projetos.component';
import {PublicacoesComponent} from './publicacoes/publicacoes.component';

const routes: Routes = [
  {path: '', redirectTo: '/colaboradores', pathMatch:'full'},
  { path: 'colaboradores', component: ColaboradoresComponent, data : {title: 'Lista'} },
  { path: 'projetos', component: ProjetosComponent, data : {title: 'Lista'}},
  {path: 'publicacoes', component: PublicacoesComponent, data : {title: 'Lista'}}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
