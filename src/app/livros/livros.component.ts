import { Component, OnInit } from '@angular/core';
import {ListarLivrosService} from "./listar-livros.service";
import { Router } from "@angular/router";

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

  constructor(private  listarLivrosService: ListarLivrosService, private router: Router) { }

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

  excluirLivro(id:number){
    this.listarLivrosService.excluirLivro(id).subscribe(value => {

      console.log(value);


    });
    alert('O livro foi excluido!');
    // this.router.navigate(['/livros']);
    this.carregarLivros();
    // window.location.reload()
    this.router.navigateByUrl('/livros');

  }
}
