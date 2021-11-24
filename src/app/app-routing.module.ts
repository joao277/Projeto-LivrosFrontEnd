import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LivrosComponent } from './livros/livros.component';
import { LoginComponent } from './login/login.component';
import { RegislivroComponent } from './regislivro/regislivro.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '' , component: LivrosComponent, canActivate: [AuthGuard] },
  { path: 'livros' , component: LivrosComponent, canActivate: [AuthGuard] },
  { path: 'regislivro' , component: RegislivroComponent, canActivate: [AuthGuard] },
  { path: 'login' , component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
