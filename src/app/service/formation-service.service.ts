import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../Models/Formation.model';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private http: HttpClient) { }

  GetFormation(name) {
    return this.http.get<Formation[]>(`${API_URL}/users/${name}/All`);
  }
  DeleteFormation(name, id) {
    return this.http.delete(`${API_URL}/users/${name}/formations/${id}`);
  }

  GetOneFormation(name, id) {
    return this.http.get<Formation>(`${API_URL}/users/${name}/formations/${id}`);
  }
  update(name, id, formation) {
    return this.http.put(`${API_URL}/users/${name}/formations/${id}`, formation);
  }

  Ajouter(name, formation) {
    return this.http.post(`${API_URL}/users/${name}/formations`, formation);
  }

}
