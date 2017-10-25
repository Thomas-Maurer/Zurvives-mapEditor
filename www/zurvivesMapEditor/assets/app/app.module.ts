import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import {LocalizationService} from './localization/localization.service';
import { AppComponent }   from './app.component';
import { MapcreatorComponent } from './map-creator/map-creator.component';

@NgModule({
    declarations: [
      AppComponent,
      MapcreatorComponent
     ],
    imports:      [BrowserModule, HttpModule],
    bootstrap:    [AppComponent],
    providers: [LocalizationService]
})
export class AppModule {}
