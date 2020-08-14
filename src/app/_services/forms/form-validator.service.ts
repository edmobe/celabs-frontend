import { Injectable } from '@angular/core';
import { LabReservationNormalComponent } from 'src/app/_components/lab-reservation/lab-reservation-normal/lab-reservation-normal.component';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  checkReservationFormInvalid(
    isRecurrent: boolean,
    isClass: boolean,
    recurrentForm,
    classFormComponent: LabReservationNormalComponent,
    baseFormComponent: LabReservationNormalComponent): boolean {
    try {
      if (isRecurrent) {
        if (recurrentForm.invalid) {
          return true;
        }
      }
      if (isClass) {
        if (classFormComponent.reservationForm.invalid) {
          return true;
        }
      }
      if (baseFormComponent.reservationForm.invalid) {
        return true;
      }
      return false;
    } catch (error) { }
  }

  checkStartEndTimeValid(start: string, end: string): boolean {
    if (start === null || end === null) {
      return false;
    }
    const startArray = start.split(':');
    const endArray = end.split(':');
    const startDate = new Date(2020, 0, 1, parseInt(startArray[0], 10), parseInt(startArray[1], 10));
    const endDate = new Date(2020, 0, 1, parseInt(endArray[0], 10), parseInt(endArray[1], 10));
    return startDate < endDate;
  }

  checkStartEndDateValid(start: string, end: string): boolean {
    if (start === null || end === null) {
      return false;
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate < endDate;
  }
}
