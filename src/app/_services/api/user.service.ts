import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../_models/user.model';
import { UsuarioModel } from '../../_models/usuario-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private apiService: ApiService) { }

  /*registerUser(usuario : UsuarioModel){
    const body: User = {
      username: usuario.username,
      contrasena: usuario.contrasena,
      correo: usuario.contrasena,
      nombre: usuario.nombre,
      apellido1: usuario.apellido1,
      apellido2: usuario.apellido2,

    }
    var reqHeader = new HttpHeaders({ 'No-Auth':'True' });
    return this.http.post(this.apiService.getUrl() + '/User/Register', body, {headers: reqHeader});
  }*/

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.apiService.getUrl() + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
    return this.http.get(this.apiService.getUrl()+'/GetUserClaims');


  }
  


  
}
