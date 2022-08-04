import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  postEducation(data:any){
    return this.http.post<any>("http://localhost:3000/educacion", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getEducation(){
    return this.http.get<any>("http://localhost:3000/educacion")
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  updateEducation(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/educacion"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteEducacion(id:number){
    return this.http.delete<any>("http://localhost:3000/educacion"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

}
