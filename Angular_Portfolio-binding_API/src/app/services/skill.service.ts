import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//CAMBIAR NOMBRE DEL SERVICE, ESTE SERVICE SIRVE PARA TODOS LOS COMPONENTES!!!!

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = '';

  constructor(private http:HttpClient) { }

  getSkills():Observable<any>{
    return this.http.get(this.apiUrl);
  }

}
