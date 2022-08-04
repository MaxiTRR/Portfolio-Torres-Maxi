import { Component, OnInit, Input } from '@angular/core';



import { FormBuilder, FormGroup } from '@angular/forms';

import { InfoPersonal } from 'src/app/models/models.model';

import { faPencil} from '@fortawesome/free-solid-svg-icons';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';
import { InfoTextService } from 'src/app/services/info-text.service';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {
  faPencil=faPencil;
  faXmark=faXmark;

  formValue!: FormGroup;
  infoTextModelObj:InfoPersonal = new InfoPersonal();
  infoTextData!:any;

  data:boolean = false;

  constructor(private changeStyleService:ChangeStyleService, private formBuilder:FormBuilder, private api:InfoTextService) { }

  public ngOnInit():void{
    this.formValue = this.formBuilder.group({
      nombreInfo: [''],
      titulo: [''],
      descripcion: ['']
    })
    
    this.getAllInfoPersonal();
    
    //Metodo para el cambio de Dark-Light theme
    this.changeStyleService.currentData.subscribe( data => this.data = data);
  }

  postInfoPersonalDetails(){
    this.infoTextModelObj.nombreInfo = this.formValue.value.nombreInfo;
    this.infoTextModelObj.titulo = this.formValue.value.titulo;
    this.infoTextModelObj.descripcion = this.formValue.value.descripcion;

    this.api.postInfoPersonal(this.infoTextModelObj)
    .subscribe({
      next: (res) =>{
        console.log(res);
        alert("Info Personal agregado exitosamente!");
        let ref = document.getElementById("cancelInfo")
        ref?.click();
        this.formValue.reset();
        this.getAllInfoPersonal();
      },
        error: (err) =>{
          alert("Algo salio mal!")
        }
    })
  }

  getAllInfoPersonal(){
    this.api.getInfoPersonal()
    .subscribe({
      next: (res)=>{
        this.infoTextData = res;
      }
    })
  }

}
