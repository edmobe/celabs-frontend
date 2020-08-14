import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { UserService } from 'src/app/_services/api/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';
import { UsuarioModel } from 'src/app/_models/usuario-model.model';
import { Router } from '@angular/router';

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
    private toastr: ToastrService,
    private router: Router) {
    this.titleService.setTitle('');
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
    this.OnSubmit();
  }


  OnSubmit() {
    const body: UsuarioModel = {
      username: this.username.value,
      correo: this.email.value,
      contrasena: this.password.value,
      nombre: this.name.value,
      apellido1: this.middleName.value,
      apellido2: this.lastName.value,
      cedula: this.password.value,
      rol: this.role.value,
      apoyo: false,
      administrador: false

    }
    this.userService.registerUser(body)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.toastr.success('Usuario registrado', 'Espere el correo de confirmación');
          this.router.navigate(['/login']);
        }
        else
          this.toastr.error(data.Errors[0]);
        this.router.navigate(['/register']);
      });
  }

}
