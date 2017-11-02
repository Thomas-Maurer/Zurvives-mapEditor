import {Component, OnInit, ElementRef} from "@angular/core";
import { JsonPipe } from '@angular/common';
import 'createjs';
import {LocalizationService} from '../localization/localization.service';
@Component({
    selector: 'map-creator',
    templateUrl: '/templates/map-creator/map-creator.ejs'
})
export class MapcreatorComponent implements OnInit{
  labels : {};
  stage : any;
  localService : any;
  trad : {}[];
  currentUserLocalization : string;

  constructor(private localizationService: LocalizationService) {
    this.localService = localizationService;
    //get the currentUser localisation to know which language we need to use
    this.currentUserLocalization = 'fr';
    //All the labels in the template
    this.labels =
      {
        'mapCreation' : '',
        'newMap' : '',
        'userMenu' : '',
        'dashboard' : ''
      };
      
  }
  ngOnInit() {
      this.localService.getTrad(this.currentUserLocalization).then((data:any) => {
        this.trad = data;
        //Go through each labels key to get the translate
        for (let key in this.labels)
        {
          this.labels[key] = this.trad[key];
        }
      });
    }
}
