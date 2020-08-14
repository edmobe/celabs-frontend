import { Injectable } from '@angular/core';
import { Admin } from '../../_models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private admins: Admin[];

  constructor(private http: HttpClient, private apiService: ApiService) { }

  public getAdmins(): Admin[] {
   
    this.http.get(this.apiService.getUrl() + '/getLabs').toPromise().then(res => this.admins = res as Admin[]);
    return this.admins;
  }
}
