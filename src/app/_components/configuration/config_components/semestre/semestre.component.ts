import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbDateStruct,NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('');
   }
  modelEnd: NgbDateStruct;
  modelStart: NgbDateStruct;
  ngOnInit(): void {
  }

  changeFinMin() : void {
    var calendarInicio = (<HTMLInputElement>document.getElementById("semesterStart"));
    var calendarFin = (<HTMLInputElement>document.getElementById("semesterEnd"));
    calendarFin.min = calendarInicio.value;
  }

  saveChanges () : void {
    var calendarInicio = (<HTMLInputElement>document.getElementById("semesterStart"));
    var calendarFin = (<HTMLInputElement>document.getElementById("semesterEnd"));
    

    var Inicio = calendarInicio.valueAsDate;
    var Fin = calendarFin.valueAsDate;

    if((Inicio == null) || (Fin == null)){
      console.log("Error");
    } else {
      console.log(Inicio, Fin);
    }
    
  }
}
