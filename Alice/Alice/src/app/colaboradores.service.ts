import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Colaboradores} from './colaboradores/colaboradores';

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('TOKEN')
        })
  };

@Injectable({
    providedIn: 'root'
})
export class ColaboradoresService{

    constructor(private http: HttpClient){}
    
    getColaboradores(): Observable<Colaboradores[]>{
        return this.http.get<
        Colaboradores[]>('http://localhost:3001/colaboradores', httpOptions);
    }

    atualizarColaboradores(colaboradores: Colaboradores): Observable<any>{
        return this.http.put('http://localhost:3001/colaboradores',colaboradores,httpOptions);
    }

    apagarColaboradores(colaboradores: Colaboradores): Observable<any> {
        return this.http.delete('http://localhost:3001/colaboradores/' + colaboradores.email);
    }
    
    adicionar(colaboradores: Colaboradores): Observable<any> {
        return this.http.post('http://localhost:3001/colaboradores', colaboradores, httpOptions);
    }

}