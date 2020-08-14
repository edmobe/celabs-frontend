import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormToJsonService {

  constructor() { }

  public createLoginJson(
    email: string,
    password: string,
    role: string
  ) {
    const loginJson = {
      email: email,
      password: password,
      role: role
    };
    return loginJson;
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

  public createInventoryJson(
    operator: string,
    laboratoryId: number,
    completeComputers: number,
    incompleteComputers: number,
    projectors: number,
    chairs: number,
    extinguishers: number) {
    const inventoryJson = {
      operator: operator,
      laboratory: laboratoryId,
      completeComputers: completeComputers,
      incompleteComputers: incompleteComputers,
      projectors: projectors,
      chairs: chairs,
      extinguishers: extinguishers
    };
    return inventoryJson;
  }

  public createHoursJson(
    date: string,
    start: string,
    end: string
  ) {
    const hoursJson = {
      date: date,
      start: start,
      end: end
    };

    return hoursJson;
  }

  public createFailuresJson(
    operator: string,
    dateTime: string,
    laboratoryId: number,
    asset: string,
    description: string
  ) {
    const failuresJson = {
      operator: operator,
      dateTime: new Date(dateTime),
      laboratory: laboratoryId,
      asset: asset,
      description: description
    }

    return failuresJson;
  }

  public createAddUserJson(
    name: string,
    middleName: string,
    lastName: string,
    id: string,
    userName: string
  ) {
    const addUserJson = {
      name: name,
      middleName: middleName,
      lastName: lastName,
      id: parseInt(id, 10),
      userName: userName
    }

    return addUserJson;
  }

  public createAddCourseJson(
    code: string,
    name: string
  ) {
    const addCourseJson = {
      code: code,
      name: name
    };
    return addCourseJson;
  }

}
