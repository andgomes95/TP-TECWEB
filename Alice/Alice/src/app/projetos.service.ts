import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Projetos} from './projetos/projetos';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('TOKEN')})
  };

@Injectable({
    providedIn: 'root'
})
export class ProjetosService{

    constructor(private http: HttpClient){}
    
    getProjetos(): Observable<Projetos[]>{
        return this.http.get<
        Projetos[]>('http://localhost:3001/projetos', httpOptions);
    }

    atualizarProjetos(projetos: Projetos): Observable<any>{
        return this.http.put('http://localhost:3001/projetos',projetos,httpOptions);
    }

    apagarProjetos(projetos: Projetos): Observable<any> {
        return this.http.delete('http://localhost:3001/projetos/' + projetos.nome,httpOptions);
    }
    
    adicionar(projetos: Projetos): Observable<any> {
        return this.http.post('http://localhost:3001/projetos', projetos, httpOptions);
    }

}