import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Laboratorio } from '../_models/laboratorio';
import { DateDisplayService } from './date-display.service';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor(private formBuilder: FormBuilder, private dateDisplayService: DateDisplayService) { }

  public getBaseForm(type: string, laboratory: Laboratorio, event: any) {
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

  public getRecurrentForm() {
    return this.formBuilder.group({
      recurrence: ['', [
        Validators.required,
        Validators.min(1),
        Validators.pattern('^[1-9][0-9]*$')
      ]]
    });
  }

  public createBaseFormJson(title: string, type: string, laboratoryId: number, start: Date, end: Date): any {
    const baseFormJson = {
      title: title,
      type: type,
      laboratory: laboratoryId,
      start: start,
      end: end
    };
    return baseFormJson;
  }

  public createClassFormJson(teacherId: number, courseId: number) {
    const classFormJson = {
      teacher: teacherId,
      course: courseId
    };
    return classFormJson;
  }


}
