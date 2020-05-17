import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private AuthService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.AuthService.getAuthentificatedToken();
    let user = this.AuthService.getAuthentificatedUser();
    if (user && basicAuthHeaderString) {
    req = req.clone(
      {
       setHeaders: {
         Authorization: basicAuthHeaderString
       }
      }
    );
  }

    return next.handle(req);
  }
}
