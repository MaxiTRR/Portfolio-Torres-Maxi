import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoTextService {

  constructor(private http:HttpClient) { }

  postInfoPersonal(data:any){
    return this.http.post<any>("http://localhost:3000/infoPersonal", data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getInfoPersonal(){
    return this.http.get<any>("http://localhost:3000/infoPersonal")
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  updateInfoPersonal(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/infoPersonal"+id, data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteInfoPersonal(id:number){
    return this.http.delete<any>("http://localhost:3000/infoPersonal"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  
}
