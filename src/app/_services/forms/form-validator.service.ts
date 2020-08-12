import { Injectable } from '@angular/core';
import { LabReservationNormalComponent } from 'src/app/_components/lab-reservation/lab-reservation-normal/lab-reservation-normal.component';

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
}
