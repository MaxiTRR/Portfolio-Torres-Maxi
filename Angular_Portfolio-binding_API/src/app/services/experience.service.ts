import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http:HttpClient) { }

  postExperience(data:any){
    return this.http.post<any>("http://localhost:3000/exp", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getExperience(){
    return this.http.get<any>("http://localhost:3000/exp")
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  updateExperience(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/exp"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteExperience(id:number){
    return this.http.delete<any>("http://localhost:3000/exp"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  
}
