import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Activo } from '../../../../_models/configuration/activo';
import { AssetsService }  from '../../../../_services/api/configuration/assets.service';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';

var buttonDanger: string = "btn btn-danger";
var buttonSuccess: string = "btn btn-success";

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetConfigForm : FormGroup;

  constructor(private titleService: TitleService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    //private serviceAsset: AssetsService,
    private formGenerator: FormGeneratorService,
    private formToJson: FormToJsonService) {
    this.titleService.setTitle('');
  }


  activos : Activo[] = [{id : "CE1001", nombre : "Monitor"}];

  ngOnInit(): void {
    //this.activos = this.serviceAsset.getActivos();
    this.assetConfigForm = this.formGenerator.createAssetConfigForm();
  }
  
  get id () {
    return this.assetConfigForm.get('id');
  }

  get nombre () {
    return this.assetConfigForm.get('nombre');
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

  checkValue(activo: Activo): void {

    var button = (<HTMLInputElement>document.getElementById("btnS" + activo.id));
    var clase = button.className;
    if (clase == buttonSuccess) {
      document.getElementById("btnS" + activo.id).className = buttonDanger;
      button.value = "Deshabilitado";
    } else {
      document.getElementById("btnS" + activo.id).className = buttonSuccess;
      button.value = "Habilitado";

    }
  }

  editState(estado: Activo, content): void {
    this.open(content);
  }


}
