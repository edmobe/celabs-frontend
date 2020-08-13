import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../_models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private apiService: ApiService) { }

  registerUser(user : User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({ 'No-Auth':'True' });
    return this.http.post(this.apiService.getUrl() + '/User/Register', body, {headers: reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.apiService.getUrl() + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
    return this.http.get(this.apiService.getUrl()+'GetUserClaims');
    //,    {headers: new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('userToken')})});


  }
  


  
}
