import { Component, OnInit } from '@angular/core';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/Models/Formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation = new Formation();
  id: number;

  constructor(private service: FormationServiceService, private route: ActivatedRoute, private route1: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.id != -1) {
        this.service.GetOneFormation('oussema', this.id).subscribe(
        (data) => this.formation = data);
    }

  }
  Save() {
    if (this.id == -1 ) {
      /// ajouter
      this.service.Ajouter('oussema', this.formation).subscribe(
        () => this.route1.navigate(['/formations'])
      );
    } else {
      //// modifier
    this.service.update('oussema', this.id, this.formation).subscribe(
      () => this.route1.navigate(['/formations'])
    );
  }
  }
}
