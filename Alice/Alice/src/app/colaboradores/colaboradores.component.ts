
import { Component, OnInit } from '@angular/core';
import { Colaboradores } from './colaboradores';
import { ColaboradoresService} from '../colaboradores.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores: Colaboradores[];
  colaboradoresSelecionado: Colaboradores;
  colaboradoresNovo: Colaboradores;
  colaboradoresAtualizar: Colaboradores;

  value: any;

  title: any;

  constructor(private colaboradoresService: ColaboradoresService, private route: ActivatedRoute) { 
    this.value = localStorage.getItem('TIPO');
   }

  ngOnInit() {
    this.loadColaboradores();
    this.route.data.subscribe(data => this.title = data);
  }

  loadColaboradores(): void{
    this.colaboradoresService.getColaboradores().subscribe(
      colaboradores => this.colaboradores = colaboradores
    );
  }

  selecionarColaboradores(colaboradores: Colaboradores): void{
    this.colaboradoresSelecionado = colaboradores;
  }

  salvar(): void{
    this.colaboradoresService.atualizarColaboradores(
      this.colaboradoresSelecionado).subscribe();
      this.colaboradoresSelecionado = null;
  }

  apagar(): void{
    this.colaboradoresService.apagarColaboradores(
      this.colaboradoresSelecionado).subscribe();
      this.colaboradores = this.colaboradores.filter(a => a !==
        this.colaboradoresSelecionado);
      this.colaboradoresSelecionado = null;
  }

  adicionar(): void{
    this.colaboradoresNovo = new Colaboradores();
  }

  cancelar(): void{
    this.colaboradoresNovo = null;
    this.colaboradoresAtualizar = null;
  }

  salvarNovoColaboradores(): void{
    this.colaboradoresService.adicionar(this.colaboradoresNovo).subscribe();
    this.colaboradores.push(this.colaboradoresNovo);
    this.colaboradoresNovo=null;
  }

  initAtualizar(colaboradores: Colaboradores): void{
    this.colaboradoresAtualizar = colaboradores;
  }

  salvarAtualizarColaboradores(): void{
    this.colaboradoresService.atualizarColaboradores(this.colaboradoresAtualizar).subscribe();
    this.colaboradoresAtualizar=null;
  }

}