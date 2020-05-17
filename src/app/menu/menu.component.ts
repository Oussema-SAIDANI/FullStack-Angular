import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    isLogged = false;
    service: AuthService;
  constructor(service: AuthService, private route: Router) {
    this.service = service;
   }

  ngOnInit() {
    this.isLogged = this.service.islogged();
  }
  logout() {
    this.service.Logout();
    this.route.navigate(['/login']);
  }

}
