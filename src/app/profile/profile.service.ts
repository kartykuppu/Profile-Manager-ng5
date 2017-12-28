import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import {Observable } from "rxjs";
import "rxjs";

import  {Profile} from './profile';


@Injectable()
export class ProfileService {
   private profilesUrl = 'app/profiles';  // URL to web api


  constructor(private _http:Http) { }

  getProfiles(): Promise<Array<Profile>> {
    return this._http
      .get(this.profilesUrl)
      .map((response) => response.json())
      .toPromise()
      .then()
      .catch(this.handleError);      
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
