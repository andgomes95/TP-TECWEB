import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Publicacoes} from './publicacoes/publicacoes';

const httpOptions = {
    headers: new 
    HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class PublicacoesService{

    constructor(private http: HttpClient){}
    
    getPublicacoes(): Observable<Publicacoes[]>{
        return this.http.get<
        Publicacoes[]>('http://localhost:3001/publicacoes');
    }

    atualizarPublicacoes(publicacoes: Publicacoes): Observable<any>{
        return this.http.put('http://localhost:3001/publicacoes',publicacoes,httpOptions);
    }

    apagarPublicacoes(publicacoes: Publicacoes): Observable<any> {
        return this.http.delete('http://localhost:3001/publicacoes/' + publicacoes.code);
    }
    
    adicionar(publicacoes: Publicacoes): Observable<any> {
        return this.http.post('http://localhost:3001/publicacoes', publicacoes, httpOptions);
    }

}