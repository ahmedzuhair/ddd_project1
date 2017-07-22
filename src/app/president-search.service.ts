import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { President }           from './president';

@Injectable()
export class PresidentSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<President[]> {
    return this.http
               .get(`api/presidents/?name=${term}`)
               .map(response => response.json().data as President[]);
  }
}
