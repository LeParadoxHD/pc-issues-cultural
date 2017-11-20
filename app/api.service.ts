import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getDatabases() {
    return this.http.get("http://moving.sytes.net/Domains.json").map(
      (response) => response.json()
    );
  }
}
