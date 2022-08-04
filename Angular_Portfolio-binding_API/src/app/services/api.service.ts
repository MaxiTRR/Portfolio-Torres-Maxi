import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // ESTE SERVICE ES EL ESPECIFICO PARA SKILLS!!!! (CAMBIAR NOMBRE)

  constructor( private http:HttpClient) { }

  postSkill(data:any){
    return this.http.post<any>("http://localhost:3000/skills", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getSkill(){
    return this.http.get<any>("http://localhost:3000/skills")
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  updateSkill(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/skills"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteSkill(id:number){
    return this.http.delete<any>("http://localhost:3000/skills"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
}
