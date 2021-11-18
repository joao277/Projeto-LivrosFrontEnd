import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegislivroService {

  constructor(private http: HttpClient ) { }

  registrarLivro(livro: any): Observable<any> {
    return this.http.post('http://localhost:4000/api/books', livro)
  }
}
