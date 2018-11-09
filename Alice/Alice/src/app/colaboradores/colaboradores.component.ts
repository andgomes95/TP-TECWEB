import { Component, OnInit } from '@angular/core';
import { Colaboradores } from './colaboradores';
import { ColaboradoresService} from '../colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores: Colaboradores[];
  colaboradoresSelecionado: Colaboradores;
  colaboradoresNovo: Colaboradores;

  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit() {
    this.loadColaboradores();
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
  }

  salvarNovoColaboradores(): void{
    this.colaboradoresService.adicionar(this.colaboradoresNovo).subscribe();
    this.colaboradores.push(this.colaboradoresNovo);
    this.colaboradoresNovo=null;
  }

}