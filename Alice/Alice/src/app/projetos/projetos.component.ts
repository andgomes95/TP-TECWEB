import { Component, OnInit } from '@angular/core';
import { Projetos } from './projetos';
import { ProjetosService} from '../projetos.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  value: any;
  title: any;
  closeResult: string;

  constructor(private projetosService: ProjetosService, private route: ActivatedRoute,private modalService: NgbModal) { 
    this.value = localStorage.getItem('TIPO');
  }

  ngOnInit() {
    this.loadProjetos();
    this.route.data.subscribe(data => this.title = data);
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
    this.projetosService.adicionar(
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
