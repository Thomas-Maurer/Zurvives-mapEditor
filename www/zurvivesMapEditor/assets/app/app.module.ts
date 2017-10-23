import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MapcreatorComponent } from './map-creator/map-creator.component';

@NgModule({
    declarations: [
      AppComponent,
      MapcreatorComponent
     ],
    imports:      [BrowserModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}
