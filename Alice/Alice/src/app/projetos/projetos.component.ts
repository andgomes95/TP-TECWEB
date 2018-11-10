import { Component, OnInit } from '@angular/core';
import { Projetos } from './projetos';
import { ProjetosService} from '../projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos: Projetos[];
  projetosSelecionado: Projetos;
  projetosNovo: Projetos;
  projetosAtualizar: Projetos;

  constructor(private projetosService: ProjetosService) { }

  ngOnInit() {
    this.loadProjetos();
  }

  loadProjetos(): void{
    this.projetosService.getProjetos().subscribe(
      projetos => this.projetos = projetos
    );
  }

  selecionarProjetos(projetos: Projetos): void{
    this.projetosSelecionado = projetos;
  }

  salvar(): void{
    this.projetosService.atualizarProjetos(
      this.projetosSelecionado).subscribe();
      this.projetosSelecionado = null;
  }

  apagar(): void{
    this.projetosService.apagarProjetos(
      this.projetosSelecionado).subscribe();
      this.projetos = this.projetos.filter(a => a !==
        this.projetosSelecionado);
      this.projetosSelecionado = null;
  }

  adicionar(): void{
    this.projetosNovo = new Projetos();
  }

  cancelar(): void{
    this.projetosNovo = null;
    this.projetosAtualizar = null;
  }

  salvarNovoProjetos(): void{
    this.projetosService.adicionar(this.projetosNovo).subscribe();
    this.projetos.push(this.projetosNovo);
    this.projetosNovo=null;
  }
  initAtualizar(projetos: Projetos): void{
    this.projetosAtualizar = projetos;
  }

  salvarAtualizarProjetos(): void{
    this.projetosService.atualizarProjetos(this.projetosAtualizar).subscribe();
    this.projetosAtualizar=null;
  }
}
