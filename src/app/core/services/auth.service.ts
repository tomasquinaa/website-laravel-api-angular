import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';

// Services
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  public sign(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/login`, payload).pipe(
      map((res) => {
        // Este localStorage vai remover os dados
        localStorage.removeItem('token');
        // localStorage.setItem(
        //   'access_token',
        //   JSON.stringify(res.access_token)
        // );

        // Vai salvar os dados
        localStorage.setItem('token', res.token);
        return this.router.navigate(['admin']);
      }),
      catchError((e) => {
        if (e.error.message) return throwError(() => e.error.message);

        return throwError(
          () =>
            'No momento não estamos conseguido validar este dados, tente novamente mais tarde!'
        );
      })
    );
  }

  public logout() {
    localStorage.removeItem('token');
    return this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (!token) return false;

    // Importa
    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }
}
