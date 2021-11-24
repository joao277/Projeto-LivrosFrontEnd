import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: any, state: any): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map((user: any) => !!user),
      tap((loggedIn: any) => {
        if (!loggedIn) {
          console.log('Acesso restrito.');
          this.router.navigate(['/login']);
        }
      })
    )
  }

}