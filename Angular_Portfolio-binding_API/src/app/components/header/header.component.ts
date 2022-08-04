import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

import { ChangeStyleService } from 'src/app/services/change-style.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

  @Output() darkMode = new EventEmitter<boolean>();
  data = false;

  constructor(private changeStyleService:ChangeStyleService) { }

  ngOnInit(): void {
  }

  sendClickEvent(){
    this.data = !this.data;
    this.changeStyleService.changeData(this.data);
  }

}
