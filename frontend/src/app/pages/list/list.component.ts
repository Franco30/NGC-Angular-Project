import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantService } from '../../pages/shared/applicant.service';
import { Applicant } from '../../pages/shared/applicant.model';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private applicantService: ApplicantService, private router: Router) { }

  ngOnInit() {
    this.refreshApplicantList();
  }


  refreshApplicantList() {
    this.applicantService.getApplicantList().subscribe((res) => {
      this.applicantService.applicant = res as Applicant[];
    });
  }

}
