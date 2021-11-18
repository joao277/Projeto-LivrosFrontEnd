import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegislivroService } from './regislivro.service';

@Component({
  selector: 'app-regislivro',
  templateUrl: './regislivro.component.html',
  styleUrls: ['./regislivro.component.css']
})
export class RegislivroComponent implements OnInit {

  livrosForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('')
  })

  constructor(
    private regisLivroService: RegislivroService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  adicionarLivro(): void {
    this.regisLivroService.registrarLivro(this.livrosForm.value).subscribe(() => {
      alert('O livro foi adicionado!');
      this.router.navigate(['/livros']);
    })
  }

  onSubmit(): void {
    console.log(this.livrosForm.value);
  }

}
