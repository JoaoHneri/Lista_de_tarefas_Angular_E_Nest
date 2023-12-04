import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginModel } from 'src/Model/LoginModel';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const bodyReq = { email: email, password: password };
    return this.http
      .post<LoginModel>(`${this.apiUrl}/auth/login`, bodyReq)
      .pipe(
        tap((res) => {
          console.log('Logado com sucesso!', res);
          localStorage.setItem('token', JSON.stringify(res.access_token));
          localStorage.setItem('email', JSON.stringify(res.email));
          localStorage.setItem('userId', JSON.stringify(res.id));
          localStorage.setItem('name', JSON.stringify(res.name));

        })
      );
  }
}
