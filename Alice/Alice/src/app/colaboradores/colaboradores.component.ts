
import { Component, OnInit } from '@angular/core';
import { Colaboradores } from './colaboradores';
import { ColaboradoresService} from '../colaboradores.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  closeResult: string;
  value: any;

  title: any;

  constructor(private colaboradoresService: ColaboradoresService, private route: ActivatedRoute, private modalService: NgbModal) { 
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}