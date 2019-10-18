import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApplicantService } from '../../pages/shared/applicant.service';
import { Applicant } from '../../pages/shared/applicant.model';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  statusOthers: String = "";
  projectsiteOthers: String = "";
  projecttenureOthers: String = "";
  rightoverlandOthers: String = "";
  projectnatureOthers: String = "";

  PleaseSpecify: boolean;
  selectprojectnature(event) {
    let selected = event.target.value;
    if (selected == "PleaseSpecify") {
      this.PleaseSpecify = true;
    } else {
      this.PleaseSpecify = false;
    }
  }

  Specify: boolean;
  selectrightoverland(event) {
    let selected = event.target.value;
    if (selected == "Specify") {
      this.Specify = true;
    } else {
      this.Specify = false;
    }
  }

  OthersSpecify: boolean;
  selectProjectTenure(event) {
    let selected = event.target.value;
    if (selected == "OthersSpecify") {
      this.OthersSpecify = true;
    } else {
      this.OthersSpecify = false;
    }
  }

  Others: boolean;
  selectProject(event) {
    let selected = event.target.value;
    if (selected == "Others") {
      this.Others = true;
    } else {
      this.Others = false;
    }
  }


  Agricultural: boolean;
  selectInput(event) {
    let selected = event.target.value;
    if (selected == "Agricultural") {
      this.Agricultural = true;
    } else {
      this.Agricultural = false;
    }
  }

  constructor(private applicantService: ApplicantService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshApplicantList();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset(this.applicantService.selectedApplicant);
      this.applicantService.selectedApplicant = {
        _id: "",
        name: "",
        corporation: "",
        address: "",
        corporationaddress: "",
        authrepresentative: "",
        addressauthrepresentative: "",
        projecttype: "",
        projectnature: "",
        projectlocation: "",
        projectarea: "",
        rightoverland: "",
        projecttenure: "",
        projectsite: "",
        status: "",
        projectcost: ""
      }
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.applicantService.postApplicant(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshApplicantList();
      // this.snackBar.open('Saved successfully', 'OK', {
      //   duration: 3000
      // })
    });
  }
  else {
    console.log(form.value);
    this.applicantService.putApplicant(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshApplicantList();
      // this.snackBar.open('Updated successfully', 'OK', {
      //   duration: 3000
      // })
    });
  }
  }

  refreshApplicantList() {
    this.applicantService.getApplicantList().subscribe((res) => {
      this.applicantService.applicant = res as Applicant[];
    });
  }

  onEdit(app : Applicant){
    this.PleaseSpecify = app.status == 'New Development' && 'Improvement'? false:true;
    this.Specify = app.status == 'OWNER' && 'lessee'? false:true;
    this.OthersSpecify = app.status == 'Permanent'? false:true;
    this.Others = app.status == 'Residential' && 'Institutional' && 'Commercial' && 'Industrial'? false:true;
    this.Agricultural = app.status == 'Vacant/Idle'? false:true;
    this.applicantService.selectedApplicant = app;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.applicantService.deleteApplicant(_id).subscribe((res) => {
        this.refreshApplicantList();
        this.resetForm(form);
        // this.snackBar.open('Deleted successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
  }
}

