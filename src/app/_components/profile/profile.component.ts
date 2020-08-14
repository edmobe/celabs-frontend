import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  profileForm: FormGroup;
  changed = false;

  constructor(
    private titleService: TitleService,
    private formService: FormGeneratorService,
    private alertService: AlertService) {
    this.titleService.setTitle('Perfil de usuario');
  }

  ngOnInit(): void {
    this.user = this.getUser();
    this.profileForm = this.formService.createProfileForm(
      this.user.name,
      this.user.middleName,
      this.user.lastName,
      this.user.email
    );
    this.profileForm.valueChanges.subscribe(() => {
      this.changed = true;
    });
  }

  deleteAccount() {
    this.alertService.confirm(
      'Confirmación',
      '¿Está seguro de que desea eliminar su cuenta de CELabs?').then((result) => {
        if (result) {
          // Success
          this.postDeleteAccount();
        } else {
          // No success
          console.log(false);
        }
      }).catch(() => {
        // Error
        console.log(false);
      });
  }

  get name() {
    return this.profileForm.get('name');
  }

  get middleName() {
    return this.profileForm.get('middleName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get email() {
    return this.profileForm.get('email');
  }

  // GETs
  getUser() {
    return {
      name: 'Eduardo',
      middleName: 'Moya',
      lastName: 'Bello',
      email: 'edmobe@estudiantec.cr',
      role: 'Administrador'
    };
  }

  // POSTs
  updateProfile() {
    this.changed = false;
  }

  postDeleteAccount() {
    console.log(this.user);
  }

}
