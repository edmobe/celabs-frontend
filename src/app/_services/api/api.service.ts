import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly routeURL: string = 'http://localhost:53618/api';

  constructor() { }

  getUrl(): string {
    return this.routeURL;
  }
}
