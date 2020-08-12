import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormToJsonService {

  constructor() { }

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

  public createRecurrentFormJson(recurrence: number) {
    const recurrentFormJson = {
      recurrence: recurrence
    };
    return recurrentFormJson;
  }

  public createConfigSemesterJson(start, end) {
    const configSemesterJson = {
      start: start,
      end: end
    }
    return configSemesterJson;
  }
}
