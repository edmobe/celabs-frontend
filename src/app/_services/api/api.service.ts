import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly routeURL: string = 'https://celabsapi.azurewebsites.net/api';
  //private readonly routeURL: string = 'https://localhost:44338/api'

  constructor() { }

  getUrl(): string {
    return this.routeURL;
  }

}
