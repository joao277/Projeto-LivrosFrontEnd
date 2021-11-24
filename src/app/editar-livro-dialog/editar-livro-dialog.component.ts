import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormControl, FormGroup } from '@angular/forms';
import {LivrosService} from '../livros/livros.service'
import {Router} from "@angular/router";

export interface DialogData {
  idLivro: number;
}



@Component({
  selector: 'app-editar-livro-dialog',
  templateUrl: './editar-livro-dialog.component.html',
  styleUrls: ['./editar-livro-dialog.component.css']
})
export class EditarLivroDialogComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private  livrosService: LivrosService,
    private router: Router,
    public dialogRef: MatDialogRef<EditarLivroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

) { }

  formulario: any

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nomeLivro: new FormControl(null),
      autor: new FormControl(null),
    });
  }

  // nomeLivro: string;
  // autor: string;

  cancelar(): void {
    this.dialogRef.close();
  }
  // editarLivro(): void {
  //   const nomeLivro = this.formulario.value.nomeLivro;
  //   console.log(this.data.idLivro, nomeLivro)
  // }

  editarLivro(id:number){
    const nomeLivro = this.formulario.value.nomeLivro;
    const autor = this.formulario.value.autor;

    let dataEdit = {
      "title": nomeLivro,
      "author": autor
    }
    this.livrosService.editarLivro(id, dataEdit).subscribe(value => {

      console.log(value);


    });

    this.snackBar.open('Livro atualizado com sucesso', 'Ok', {
      duration: 2500
    }).afterDismissed().subscribe(() =>{
      window.location.reload()
    })

    this.dialogRef.close();


    // alert('O livro foi editado!');

    // this.router.navigate(['/livros']);
    // this.carregarLivros();



  }


}
