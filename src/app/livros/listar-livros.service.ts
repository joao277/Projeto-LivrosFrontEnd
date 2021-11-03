import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListarLivrosService {

  constructor(private http: HttpClient) { }

  listarLivros(): Observable<any>{
    return this.http.get("http://localhost:4000/api/books");
  }
}
