import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  roles: string[];

  constructor(
    private modalService: NgbModal,
    private formGenerator: FormGeneratorService,
    private formToJson: FormToJsonService) { }

  ngOnInit(): void {
    this.roles = this.getRoles();
    this.loginForm = this.formGenerator.createLoginForm();
  }

  openSurvey() {
    let modalRef;
    modalRef = this.modalService.open(SurveyComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      if (result) { }
    }).catch(err => { });
  }

  successfulLogin(json: any) {
    alert('Json generado:\n' + JSON.stringify(json));
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get role() {
    return this.loginForm.get('role');
  }

  // GETs
  getRoles() {
    return ['Administrador', 'Operador', 'Administrativo', 'Docente', 'Equipo de apoyo'];
  }

  // POSTs
  post() {
    const json = this.formToJson.createLoginJson(
      this.email.value,
      this.password.value,
      this.role.value
    );
    this.successfulLogin(json);
  }

}
