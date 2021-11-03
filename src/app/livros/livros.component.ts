import { Component, OnInit } from '@angular/core';
import {ListarLivrosService} from "./listar-livros.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros = [
    {
      "id": 1,
      "title": "",
      "author": ""
    }];

  constructor(private  listarLivrosService: ListarLivrosService) { }

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(){
    this.listarLivrosService.listarLivros().subscribe(value => {
      //console.log(value);
      this.livros = value;
      console.log(this.livros)
    })
  }
}
