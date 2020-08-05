import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventTimeStringService {

  constructor() { }

  private dateToISO(event: any): string {
    const date = new Date(event);
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
  }

  public dateToIsoDate(event: any): string {
    return this.dateToISO(event).substring(0, 10);
  }

  public dateToIsoTime(event: any): string {
    return this.dateToISO(event).substring(11, 16);
  }
}
