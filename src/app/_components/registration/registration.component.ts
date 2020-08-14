import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { UserService } from 'src/app/_services/api/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  roles: string[];

  registrationForm: FormGroup;

  constructor(private titleService: TitleService,
    private formGenerator: FormGeneratorService,
    private formToJson: FormToJsonService,
    private userService: UserService,
    private toastr: ToastrService) {
    this.titleService.setTitle('Registrarse');
  }

  ngOnInit(): void {
    this.roles = ['Administrativo', 'Profesor'];
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

  // POST
  post() {
    const json = this.formToJson.createResiterJson(
      this.name.value,
      this.middleName.value,
      this.lastName.value,
      this.id.value,
      this.username.value,
      this.password.value,
      this.email.value,
      this.role.value
    );
    alert('Json generado:\n' + JSON.stringify(json));
  }


  /*OnSubmit() {
    this.userService.registerUser( )
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }*/


}
