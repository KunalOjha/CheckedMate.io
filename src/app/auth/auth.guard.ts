import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('user', 'isLoggedIn').pipe(
      tap((isLoggedIn) => isLoggedIn ? null : this.router.navigate(['/login'])  )
    )
  }

  constructor(private store : Store<IAppState>, private router : Router) {}
}
