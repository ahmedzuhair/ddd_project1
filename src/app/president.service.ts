import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { President } from './president';

@Injectable()
export class PresidentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private presidentsUrl = 'api/presidents';  // URL to web api

  constructor(private http: Http) { }

  getPresidents(): Promise<President[]> {
    return this.http.get(this.presidentsUrl)
               .toPromise()
               .then(response => response.json().data as President[])
               .catch(this.handleError);
  }


  getPresident(id: number): Promise<President> {
    const url = `${this.presidentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as President)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.presidentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<President> {
    return this.http
      .post(this.presidentsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as President)
      .catch(this.handleError);
  }

  update(president: President): Promise<President> {
    const url = `${this.presidentsUrl}/${president.id}`;
    return this.http
      .put(url, JSON.stringify(president), {headers: this.headers})
      .toPromise()
      .then(() => president)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo
    return Promise.reject(error.message || error);
  }
}

