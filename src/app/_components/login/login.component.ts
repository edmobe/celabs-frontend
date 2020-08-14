import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';

import { UserService } from '../../_services/api/user.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';

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
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
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

  onSubmit(username, password) {
    this.userService.userAuthentication(username, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.toastr.success('Bienvenido', 'Sesión iniciada');
      this.router.navigate(['/home']);
    },
      (err: HttpErrorResponse) => {
        this.toastr.error('Error', 'Ingrese sus credenciales de nuevo');
      });
  }

  successfulLogin(json: any) {
    alert('Json generado:\n' + JSON.stringify(json));
  }

  get username() {
    return this.loginForm.get('username');
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
      this.username.value,
      this.password.value,
      this.role.value
    );
    this.onSubmit(this.username.value, this.password.value);
    //this.successfulLogin(json);
  }

}
