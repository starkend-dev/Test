import { Component, OnInit} from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ NgbCarouselConfig ]
})
export class HomeComponent implements OnInit {
 
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousel used by this component tree
    config.interval=4000;
    config.wrap= true;
    config.keyboard=false;
    config.pauseOnHover=false;
   }

  ngOnInit() {
  }
 

}
