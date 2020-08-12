import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Laboratorio } from '../../_models/laboratorio';
import { DateDisplayService } from '../date-display.service';
import { FormValidatorService } from './form-validator.service';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor(
    private formBuilder: FormBuilder,
    private dateDisplayService: DateDisplayService,
    private formValidatorService: FormValidatorService) { }

  public createBaseForm(type: string, laboratory: Laboratorio, event: any) {
    return this.formBuilder.group({
      title: ['', [
        Validators.required
      ]],
      type: [type, [
        Validators.required
      ]],
      laboratory: [laboratory.nombre, [
        Validators.required
      ]],
      time: [this.dateDisplayService.getSingleDayDisplay(new Date(event.start), new Date(event.end)), [
        Validators.required
      ]]
    });
  }

  public createClassForm() {
    return this.formBuilder.group({
      course: ['', [
        Validators.required
      ]],
      teacher: ['', [
        Validators.required
      ]]
    });
  }

  public createRecurrentForm(weeksRemaining: number) {
    return this.formBuilder.group({
      recurrence: ['', [
        Validators.required,
        Validators.min(1),
        Validators.max(weeksRemaining),
        Validators.pattern('^[1-9][0-9]*$')
      ]]
    });
  }

  public createSemesterConfigForm() {
    return this.formBuilder.group({
      start: ['', [
        Validators.required
      ]],
      end: ['', [
        Validators.required
      ]]
    });
  }
  public createAssetConfigForm() {
    return this.formBuilder.group({
      id: ['', [
        Validators.required
      ]],
      nombre: ['', [
        Validators.required
      ]]
    });
  }

}
