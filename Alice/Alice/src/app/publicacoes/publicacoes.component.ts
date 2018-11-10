import { Component, OnInit } from '@angular/core';
import { Publicacoes } from './publicacoes';
import { PublicacoesService} from '../publicacoes.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  publicacoes: Publicacoes[];
  publicacoesSelecionado: Publicacoes;
  publicacoesNovo: Publicacoes;
  publicacoesAtualizar: Publicacoes;

  constructor(private publicacoesService: PublicacoesService) { }

  ngOnInit() {
    this.loadPublicacoes();
  }

  loadPublicacoes(): void{
    this.publicacoesService.getPublicacoes().subscribe(
      publicacoes => this.publicacoes = publicacoes
    );
  }

  selecionarPublicacoes(publicacoes: Publicacoes): void{
    this.publicacoesSelecionado = publicacoes;
  }

  salvar(): void{
    this.publicacoesService.atualizarPublicacoes(
      this.publicacoesSelecionado).subscribe();
      this.publicacoesSelecionado = null;
  }

  apagar(): void{
    this.publicacoesService.apagarPublicacoes(
      this.publicacoesSelecionado).subscribe();
      this.publicacoes = this.publicacoes.filter(a => a !==
        this.publicacoesSelecionado);
      this.publicacoesSelecionado = null;
  }

  adicionar(): void{
    this.publicacoesNovo = new Publicacoes();
  }

  cancelar(): void{
    this.publicacoesNovo = null;
    this.publicacoesAtualizar = null;
  }

  salvarNovoPublicacoes(): void{
    this.publicacoesService.adicionar(this.publicacoesNovo).subscribe();
    this.publicacoes.push(this.publicacoesNovo);
    this.publicacoesNovo=null;
  }
  
  initAtualizar(publicacoes: Publicacoes): void{
    this.publicacoesAtualizar = publicacoes;
  }

  salvarAtualizarPublicacoes(): void{
    this.publicacoesService.atualizarPublicacoes(this.publicacoesAtualizar).subscribe();
    this.publicacoesAtualizar=null;
  }
  
}
