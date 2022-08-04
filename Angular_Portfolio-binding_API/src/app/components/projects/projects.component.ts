import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Proyectos } from 'src/app/models/models.model';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { ProjectsService } from 'src/app/services/projects.service';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!:FormGroup;
  proModelObj:Proyectos = new Proyectos();
  proData!:any;

  data:boolean = false;
  
  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private api:ProjectsService) { }

  public ngOnInit():void{
    this.formValue = this.formBuilder.group({
      tituloPro: [''],
      tipoPro: [''],
      periodoPro: [''],
      descripcionPro: ['']
    });

    this.getAllProjects()
    
    
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

  postProjectDetails(){
    this.proModelObj.tituloPro = this.formValue.value.tituloPro;
    this.proModelObj.tipoPro = this.formValue.value.tipoPro;
    this.proModelObj.periodoPro = this.formValue.value.periodoPro;
    this.proModelObj.descripcionPro = this.formValue.value.descripcionPro;

    this.api.postProject(this.proModelObj)
    .subscribe({
      next: (res)=>{
        console.log(res);
        alert("Proyecto agregado exitosamente!");
        let ref = document.getElementById("cancelPro")
        ref?.click();
        this.formValue.reset();
        this.getAllProjects();
      },
        error: (err)=>{
          alert("Algo salio mal!");
        }
    })
  }

  getAllProjects(){
    this.api.getProject()
    .subscribe({
      next: (res)=>{
        this.proData = res;
      }
    })
  }

}
