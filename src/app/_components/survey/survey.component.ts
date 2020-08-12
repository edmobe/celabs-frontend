import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formGenerator: FormGeneratorService) { }

  ngOnInit(): void {
    this.surveyForm = this.formGenerator.createSurveyForm();
  }

  get satisfaction() {
    return this.surveyForm.get('satisfaction');
  }

  postSurvey(): void {
    console.log('Enviar encuesta');
  }

}
