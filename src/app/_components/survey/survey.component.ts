import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../../_services/alert.service';
import { FormGroup } from '@angular/forms';
import { faAngry, faFrown, faSmile, faLaugh } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm: FormGroup;

  // Icons
  public veryBad = faAngry;
  public bad = faFrown;
  public good = faSmile;
  public veryGood = faLaugh;

  // Icon colors
  public veryBadColor = '#0154a0';
  public badColor = '#0154a0';
  public goodColor = '#0154a0';
  public veryGoodColor = '#0154a0';

  // Icon sizes
  public veryBadSize = '2x';
  public badSize = '2x';
  public goodSize = '2x';
  public veryGoodSize = '2x';

  constructor(
    public activeModal: NgbActiveModal,
    private alertService: AlertService) { }

  ngOnInit(): void { }

  handleHover(element: string): void {
    const color = '#01396e';
    const size = '3x';
    this.changeStyles(element, color, size);
  }

  handleLeave(element: string): void {
    const color = '#0154a0';
    const size = '2x';
    this.changeStyles(element, color, size);
  }

  changeStyles(element: string, color: string, size: string): void {
    switch (element) {
      case 'veryBad':
        this.veryBadColor = color;
        this.veryBadSize = size;
        break;
      case 'bad':
        this.badColor = color;
        this.badSize = size;
        break;
      case 'good':
        this.goodColor = color;
        this.goodSize = size;
        break;
      case 'veryGood':
        this.veryGoodColor = color;
        this.veryGoodSize = size;
        break;
      default:
        break;
    }
  }

  postSuccessful() {
    this.alertService.alert(this.activeModal, '¡Gracias por su participación!',
      'Su respuesta se ha registrado exitosamente');
  }

  // POST
  postSurvey(satisfaction: number): void {
    console.log('Se registra una satisfacción de ' + satisfaction);
    this.postSuccessful();
  }
}
