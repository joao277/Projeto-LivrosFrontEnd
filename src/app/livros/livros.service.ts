import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<any>{
    return this.http.get("http://localhost:4000/api/books");
  }

  excluirLivro(idLivro:number): Observable<any>{
    return this.http.delete(`http://localhost:4000/api/books/${idLivro}`);
  }

  editarLivro(idLivro:number, data: any): Observable<any>{
    return this.http.put(`http://localhost:4000/api/books/${idLivro}`, data);
  }
}
