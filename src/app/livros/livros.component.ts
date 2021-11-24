import { Component, OnInit } from '@angular/core';
import {LivrosService} from "./livros.service";
import { Router } from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EditarLivroDialogComponent} from "../editar-livro-dialog/editar-livro-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(
      private snackBar: MatSnackBar,
      private  listarLivrosService: LivrosService,
      private router: Router,
      public dialog: MatDialog
  ) { }

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

      console.log("Excluir",value);


    });
    // alert('O livro foi excluido!');
    // // this.router.navigate(['/livros']);
    this.snackBar.open('Livro excluido com sucesso', 'Ok', {
      duration: 2500
    }).afterDismissed().subscribe(() =>{
      // window.location.reload()
      this.router.navigate(['/livros']);
    })
    this.carregarLivros();
    //
    // this.router.navigateByUrl('/livros');

  }

  openDialog(idLivro: number): void {
    const dialogRef = this.dialog.open(EditarLivroDialogComponent, {
      width: '500px',
      data: {idLivro: idLivro}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
