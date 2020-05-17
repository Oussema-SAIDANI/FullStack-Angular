import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private service: AuthService, private route: Router) { }

  canActivate() {

    if (this.service.islogged()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
