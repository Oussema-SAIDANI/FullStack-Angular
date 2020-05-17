import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = 'oussema';

  constructor(private ServiceApi: RestApiService) { }

  ngOnInit() {
  }

  Api() {
   // this.ServiceApi.GetService().subscribe(
     this.ServiceApi.GetServiceParam(this.name).subscribe(
      data => console.log(data),

    );
  }

}
