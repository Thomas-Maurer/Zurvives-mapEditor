import {Component} from '@angular/core';
import {LocalizationService} from '../localization/localization.service';
@Component({
    selector: 'map-creator',
    templateUrl: '/templates/map-creator/map-creator.ejs'
})
export class MapcreatorComponent {
  labels : {name: string, value: string}[];
  constructor(private localizationService: LocalizationService) {
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
    this.labels.forEach(function (label) {
      label.value = localizationService.getLabelTrad('fr',label.name)
    })
  }
}
