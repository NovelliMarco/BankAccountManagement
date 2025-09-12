import { HttpClient } from '@angular/common/http';
import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable()
export class Auth {
  constructor(private http: HttpClient) {}

  private readonly mockedUser: User = {
    name: 'Marco',
    surname: 'Novelli',
    cf: 'RSSMR01R10H101J',
    birthday: '2001-10-01',
    iban: 'IT29K0300203280656138636643',
  };

  private _loggedUser: WritableSignal<User | null> = signal<User | null>(null);
  loggedUser = this._loggedUser.asReadonly();
  private setUser(user: User | null) {
    this._loggedUser.set(user);
  }
  loginEffect = effect(() => {
    if (this.loggedUser()) sessionStorage.setItem('loggedUser', JSON.stringify(this.loggedUser()));
  });

  getLoggedUser(): User | null {
    let sessionUser = sessionStorage.getItem('loggedUser');
    if (sessionUser) return JSON.parse(sessionUser);
    else return this.loggedUser();
  }

  login() {
    return this.http.post<User>(`${environment.apiUrl}/login`, {}).pipe(
      tap({
        next: (user) => this.setUser(user),
        error: () => this.setUser(this.mockedUser),
      })
    );
  }

  logout() {
    sessionStorage.removeItem('loggedUser');
    this.setUser(null);
  }
}
