import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';
<<<<<<< HEAD
import {UserService} from '../../_services/api/user.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
=======
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
>>>>>>> master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  userClaims: any;
  constructor(private modalService: NgbModal, 
    private userService: UserService, 
    private router:Router,
    private toastr: ToastrService) { }
=======
  loginForm: FormGroup;
>>>>>>> master

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
  

  onSubmit(userName, password){
    this.userService.userAuthentication(userName,password).subscribe((data:any)=>{
    localStorage.setItem('userToken',data.access_token);
    this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse)=>{
      this.toastr.error('Error','Ingrese sus credenciales de nuevo');
    });
  }

<<<<<<< HEAD
  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  getUserInfo(){
    this.userService.getUserClaims().subscribe((data:any)=>{
      this.userClaims=data;
    });
  }
=======
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

>>>>>>> master
}
