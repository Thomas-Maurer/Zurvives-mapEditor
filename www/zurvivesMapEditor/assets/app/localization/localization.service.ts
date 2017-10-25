import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocalizationService {
  results : string[];

  constructor(private http: Http) {
  }
  getLabelTrad(localization: string, label: string): string {
    this.getTrad(localization).subscribe(data => this.results=data, error => console.log(error));
    return this.results[label]
  }
  getTrad(localization:string): Observable<any> {
    return this.http.get('./' . localization . '.json').map((res:any) => res.json());
  }
}
