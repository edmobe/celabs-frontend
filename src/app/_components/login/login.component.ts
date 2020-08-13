import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private modalService: NgbModal, private formGenerator: FormGeneratorService) { }

  ngOnInit(): void {
    this.loginForm = this.formGenerator.createLoginForm();
  }

  openSurvey() {
    let modalRef;
    modalRef = this.modalService.open(SurveyComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      if (result) { }
    }).catch(err => { });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
