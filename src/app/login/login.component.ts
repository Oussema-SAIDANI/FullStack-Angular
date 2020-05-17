import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';
    login: boolean;
    error: string;
  constructor(private route: Router, private service: AuthService) { }

  ngOnInit() {
  }
  BasicAuthentification() {
   this.service.BasicAuth(this.username, this.password).subscribe(
    (data) => {
      console.log(data);
      this.route.navigate(['/acceuil']);
      this.login = true ;
    },
    (error) => {
      console.log(error);
      this.login = false;
      this.error = 'login failed!';
    }
   );
   }

   JWTAuthentification() {
    this.service.JWT(this.username, this.password).subscribe(
     (data) => {
       console.log(data);
       this.route.navigate(['/acceuil']);
       this.login = true ;
     },
     (error) => {
       console.log(error);
       this.login = false;
       this.error = 'login failed!';
     }
    );
    }

}
