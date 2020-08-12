import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbDateStruct, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';
import { FormValidatorService } from 'src/app/_services/forms/form-validator.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {
  
  semesterConfigForm: FormGroup;

  constructor(
    private titleService: TitleService,
    private formGenerator: FormGeneratorService,
    private formToJson: FormToJsonService
  ) {
    this.titleService.setTitle('');
  }
  modelEnd: NgbDateStruct;
  modelStart: NgbDateStruct;

  ngOnInit(): void {
    this.semesterConfigForm = this.formGenerator.createSemesterConfigForm();
  }

  post() {
    alert('Json generado:\n' + JSON.stringify(this.formToJson.createConfigSemesterJson(
      this.start.value,
      this.end.value
    )));
  }

  get start() {
    return this.semesterConfigForm.get('start');
  }

  get end() {
    return this.semesterConfigForm.get('end');
  }
}
