import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  roles: string[];

  registrationForm: FormGroup;

  constructor(private titleService: TitleService, private formGenerator: FormGeneratorService) {
    this.titleService.setTitle('Registrarse');
  }

  ngOnInit(): void {
    this.roles = ['Admin', 'Profesor', 'Operador'];
    this.registrationForm = this.formGenerator.createRegistrationForm();
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get middleName() {
    return this.registrationForm.get('middleName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get id() {
    return this.registrationForm.get('id');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get role() {
    return this.registrationForm.get('role');
  }
  

  
}
