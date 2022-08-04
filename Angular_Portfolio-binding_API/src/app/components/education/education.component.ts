import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Educacion } from 'src/app/models/models.model';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  eduModelObj:Educacion = new Educacion();
  eduData!:any;

  data:boolean = false;
  
  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private api:EducationService) { }

  public ngOnInit():void{
    this.formValue = this.formBuilder.group({
      nombreInst: [''],
      periodoEdu: [''],
      tituloEdu: [''],
      descripcionEdu: ['']
    });

    this.getAllEdu();


    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

  postEduDetails(){
    this.eduModelObj.nombreInst = this.formValue.value.nombreInst;
    this.eduModelObj.periodoEdu = this.formValue.value.periodoEdu;
    this.eduModelObj.tituloEdu = this.formValue.value.tituloEdu;
    this.eduModelObj.descripcionEdu = this.formValue.value.descripcionEdu;

    this.api.postEducation(this.eduModelObj)
    .subscribe({
      next: (res)=>{
        console.log(res);
        alert("Educacion agregada exitosamente!");
        let ref = document.getElementById("cancelEdu")
        ref?.click();
        this.formValue.reset();
        this.getAllEdu();
      },
        error: (err)=>{
          alert("Algo salio mal!");
        }
    })
  }

  getAllEdu(){
    this.api.getEducation()
    .subscribe({
      next: (res)=>{
        this.eduData = res;
      }
    })
  }

}
