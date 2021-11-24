import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegislivroComponent } from './regislivro/regislivro.component';
import { LivrosComponent } from './livros/livros.component';
import { HomeComponent } from './home/home.component'
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';



import { HttpClientModule } from '@angular/common/http';
import { CriarcontaComponent } from './criarconta/criarconta.component';
import {EditarLivroDialogComponent} from "./editar-livro-dialog/editar-livro-dialog.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegislivroComponent,
    LivrosComponent,
    HomeComponent,
    CriarcontaComponent,
    EditarLivroDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCjvBi2RsfOFfriYJz9tmP_SEYXFs-Db4Y",
      authDomain: "maislivros-7c81e.firebaseapp.com",
      projectId: "maislivros-7c81e",
      storageBucket: "maislivros-7c81e.appspot.com",
      messagingSenderId: "292281721348",
      appId: "1:292281721348:web:ddc5242b450d7a79aa8b51",
      measurementId: "G-83JZHY4WKY"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
