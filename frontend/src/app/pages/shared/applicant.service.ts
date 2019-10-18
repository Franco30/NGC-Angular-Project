import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Applicant } from './applicant.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  selectedApplicant: Applicant;
  applicant: Applicant[];
readonly baseURL = 'http://localhost:3000/applicant';

  constructor(private http: HttpClient) { }

  postApplicant(app : Applicant){
    return this.http.post(this.baseURL, app);
  }

  getApplicantList() {
    return this.http.get(this.baseURL);
  }

  putApplicant(app: Applicant) {
    return this.http.put(this.baseURL + `/${app._id}`, app);
  }

  deleteApplicant(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
