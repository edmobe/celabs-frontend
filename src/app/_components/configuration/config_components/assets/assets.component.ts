import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
interface Activos {
  codigo : string;
  descripcion : string;
}
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor(private titleService: TitleService,private modalService: NgbModal) {
    this.titleService.setTitle('');
   }

  activos : Activos[] = [
    {codigo: "CE1001", descripcion : "Monitor"},
    {codigo: "CE1002", descripcion : "Monitor"}
  ];

  ngOnInit(): void {
  }

  deleteAsset(activo : string) : void {
    console.log(activo);
  }

  model: NgbDateStruct; 
  left = true;
  closeResult = '';
  


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
