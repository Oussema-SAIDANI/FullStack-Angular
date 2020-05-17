import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  GetService() {
    return this.http.get('http://localhost:8080/hello-Bean');
  }
  GetServiceParam(name) {
   //let basicAuthHeaderString = this.CreateBasicAuthHeader();

   let header = new HttpHeaders({
   // 'Access-Control-Allow-Origin': '*',
      Authorization : 'Basic ' + btoa('oussema' + ':' + 'academy2015')
    });
    // {headers}
   return this.http.get(`http://localhost:8080/hello-Bean/${name}`, {headers: header});
  }

  /*CreateBasicAuthHeader() {
    let username = 'oussema';
    let password = 'academy2015';
    //base64 format
    let basicAuthHeaderString = 'Basic ' + btoa(username + ':' + password);
    return basicAuthHeaderString;
  }*/
}
