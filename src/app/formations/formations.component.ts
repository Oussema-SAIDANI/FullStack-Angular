import { Component, OnInit } from '@angular/core';
import { Formation } from '../Models/Formation.model';
import { FormationServiceService } from '../service/formation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations: Formation[];
  message: string;
  constructor(private ServiceFormation: FormationServiceService, private route: Router) { }

  ngOnInit() {
    this.afficherAll();
  }
  afficherAll() {
    this.ServiceFormation.GetFormation('oussema').subscribe(
      (response) => {
        this.formations = response;
      }
    );
  }
  deleteById(id) {

    this.ServiceFormation.DeleteFormation('oussema', id).subscribe(
        () => {
          this.afficherAll();
          this.message = `Success Delete of ${id}`;
        }
    );

  }

  UpdateById(id) {
    this.route.navigate(['formation', id]);
  }
 Add() {
    this.route.navigate(['formation', -1]);
  }
}
