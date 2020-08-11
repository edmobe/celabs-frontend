import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-reservation-normal-class',
  templateUrl: './lab-reservation-normal-class.component.html',
  styleUrls: ['./lab-reservation-normal-class.component.css']
})
export class LabReservationNormalClassComponent implements OnInit {

  teachers: string[] = ['Arnoldo Martínez', 'Juan Diego González', 'Manuel Uribe', 'Karla Jiménez'];
  courses: string[] = ['Bases de Datos', 'Algoritmos y Estructuras de Datos I', 'Algoritmos y Estructuras de Datos II', 'Arquitectura de Computadores']

  reservationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      course: ['', [
        Validators.required
      ]],
      teacher: ['', [
        Validators.required
      ]]
    });
  }

  get teacher() {
    return this.reservationForm.get('teacher');
  }

  get course() {
    return this.reservationForm.get('course');
  }

}
