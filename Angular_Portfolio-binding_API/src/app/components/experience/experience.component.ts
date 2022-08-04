import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Exp } from 'src/app/models/models.model';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { ExperienceService } from 'src/app/services/experience.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  expModelObj:Exp = new Exp();
  expData:any;

  data:boolean = false;

  constructor( private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private api:ExperienceService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      lugar: [''],
      periodo: [''],
      area: [''],
      rol: ['']
    });

    this.getAllExperience();

    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

  postExpDetails(){
    this.expModelObj.lugar = this.formValue.value.lugar;
    this.expModelObj.periodo = this.formValue.value.periodo;
    this.expModelObj.area = this.formValue.value.area;
    this.expModelObj.rol = this.formValue.value.rol;

    this.api.postExperience(this.expModelObj)
    .subscribe({
      next: (res)=>{
        console.log(res);
        alert("Experiencia agregada correctamente!");
        let ref = document.getElementById("cancelExp")
        ref?.click();
        this.formValue.reset();
        this.getAllExperience();
      },
        error: (err)=>{
          alert("Algo salio mal!");
        }
    })
  }

  getAllExperience(){
    this.api.getExperience()
    .subscribe({
      next: (res)=>{
        this.expData = res;
      }
    })
  };

}
