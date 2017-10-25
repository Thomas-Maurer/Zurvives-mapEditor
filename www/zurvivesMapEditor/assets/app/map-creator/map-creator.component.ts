import {Component, OnInit, ElementRef} from "@angular/core";
import {LocalizationService} from '../localization/localization.service';
@Component({
    selector: 'map-creator',
    templateUrl: '/templates/map-creator/map-creator.ejs'
})
export class MapcreatorComponent implements OnInit{
  labels : {name: string, value: string}[];
  localService : any;
  constructor(private localizationService: LocalizationService) {
    this.localService = localizationService;
    this.labels = [
      {
        'name' : 'mapCreation',
        'value' : ''
      },
      {
        'name' : 'newMap',
        'value' : ''
      }
    ];
  }
  ngOnInit() {
    var localService = this.localService,
    result;
    this.labels.forEach(function (label) {
      localService.getTrad('fr').then((data:any) => {
        label.value = data[label.name];
      });
    })
  }
}
