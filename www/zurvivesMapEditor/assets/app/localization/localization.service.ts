import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocalizationService {

  constructor(private http: Http) {
  }
  getTrad(localization:string): Promise<any> {
    return this.http.get('app/localization/' + localization +'.json').map((res:any) => res.json()).toPromise();
  }
}
