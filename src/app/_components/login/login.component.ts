import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';
import {UserService} from '../../_services/api/user.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userClaims: any;
  constructor(private modalService: NgbModal, 
    private userService: UserService, 
    private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void { }

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

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  getUserInfo(){
    this.userService.getUserClaims().subscribe((data:any)=>{
      this.userClaims=data;
    });
  }
}
