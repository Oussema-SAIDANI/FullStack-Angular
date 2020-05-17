import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthBean } from '../Models/AuthBean.model';
import {map} from 'rxjs/operators';
import { API_URL, AuthentificatedUser, Token } from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  BasicAuth(username, password) {
    let basicAuth = 'Basic ' + btoa(username + ':' + password);
    let headers = new HttpHeaders({
         Authorization : basicAuth
       });
    return this.http.get<AuthBean>(`${API_URL}/AuthBean`,
    {headers}).pipe(
      map (
        data => {
        sessionStorage.setItem(AuthentificatedUser, username);
        sessionStorage.setItem(Token, basicAuth);
        return data;
      }
      )
    );
  }


  JWT(username, password) {
    return this.http.post<any>(`http://localhost:8080/authenticate`, {
      username, password
    }).pipe(
      map (
        data => {
        sessionStorage.setItem(AuthentificatedUser, username);
        sessionStorage.setItem(Token, `Bearer ${data.token}`);
        return data;
      }
      )
    );
  }

  getAuthentificatedUser() {
   return sessionStorage.getItem(AuthentificatedUser);
 }
 getAuthentificatedToken() {
   if (this.getAuthentificatedUser()) {
     return sessionStorage.getItem(Token);
   }
}

  islogged() {
     let user =  sessionStorage.getItem(AuthentificatedUser);

     return !(user === null);
  }
  Logout() {
    sessionStorage.removeItem(AuthentificatedUser);
    sessionStorage.removeItem(Token);
  }
}
