import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { MenuComponent } from "./menu/menu.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthService } from "./service/auth.service";
import { AuthGuardService } from "./service/auth-guard.service";
import { RestApiService } from './service/rest-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormationsComponent } from './formations/formations.component';
import { FormationServiceService } from './service/formation-service.service';
import { FormationComponent } from './formations/formation/formation.component';
import { HttpInterceptorService } from './service/http/http-interceptor.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'acceuil',
    canActivate: [AuthGuardService],
    component: WelcomeComponent,
  },
  {
    path: 'logout',
    canActivate: [AuthGuardService],
    component: LogoutComponent,
  },
  {
    path: 'formations',
    canActivate: [AuthGuardService],
    component: FormationsComponent
  },
  {
    path: 'formation/:id',
    canActivate: [AuthGuardService],
    component: FormationComponent
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    LogoutComponent,
    FormationsComponent,
    FormationComponent,
  ],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
     FormsModule,
     HttpClientModule
    ],
  providers: [
        AuthGuardService,
        AuthService,
        RestApiService,
        FormationServiceService,
        //njm nestaamlch el intercepter khtr nestha9ha ken bch ylogiw baaed lokhrin permited ken ki ylogui user
       {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
        ],
  bootstrap: [AppComponent],
})
export class AppModule {}
