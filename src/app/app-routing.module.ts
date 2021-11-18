import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { LoginComponent } from './login/login.component';
import { RegislivroComponent } from './regislivro/regislivro.component';
import { CriarcontaComponent } from './criarconta/criarconta.component';

const routes: Routes = [
  //{ path: 'home' , component: HomeComponent },
  { path: '' , component: LivrosComponent },
  { path: 'livros' , component: LivrosComponent },
  { path: 'regislivro' , component: RegislivroComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'criarconta' , component: CriarcontaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
