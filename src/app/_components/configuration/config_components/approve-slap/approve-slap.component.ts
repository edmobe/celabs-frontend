import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_services/alert.service';

interface Palmada {
    id: number,
    operador : string,
    idLaboratorio : string,
    motivo : string,
    fechaSolicitud : string,
    fechaPalmada : string,
}

@Component({
  selector: 'app-approve-slap',
  templateUrl: './approve-slap.component.html',
  styleUrls: ['./approve-slap.component.css']
})
export class ApproveSlapComponent implements OnInit {

  pendingSlaps: Palmada[];
  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.pendingSlaps = this.getPalmadas();
  }
  
  confirm(userId: number) {
    this.alertService.confirm(
      'Alerta',
      '¿Está seguro de que desea aprobar esta palmada?').then((result) => {
        if (result) {
          // Success
          this.postAllow(userId);
        } else {
          // No success
          console.log(false);
        }
      }).catch(err => {
        // Error
        console.log(false);
      });
  }

  //GETs
  getPalmadas(): Palmada[] {
    return [{id: 1, operador: "Brayan", idLaboratorio: "F2-07", motivo: "Proyecto", fechaPalmada: "10", fechaSolicitud: "10"}]
  }

  // POSTs
  postAllow(userId : number) : void {
    console.log(userId);
  }
}
