import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/_services/title.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Activo } from '../../../../_models/configuration/activo';
import { AssetsService } from '../../../../_services/api/configuration/assets.service';
import { FormGroup } from '@angular/forms';
import { FormGeneratorService } from 'src/app/_services/forms/form-generator.service';
import { FormToJsonService } from 'src/app/_services/forms/form-to-json.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assetConfigForm: FormGroup;
  assetConfigModal: NgbModalRef;

  buttonDanger: string = 'btn btn-danger';
  buttonSuccess: string = 'btn btn-success';

  constructor(
    private titleService: TitleService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private formGenerator: FormGeneratorService) {
    this.titleService.setTitle('');
  }


  assets: Activo[];

  ngOnInit(): void {
    //this.activos = this.serviceAsset.getActivos();
    this.assets = this.getAssets();
    this.assetConfigForm = this.formGenerator.createAssetConfigForm();
  }

  get id() {
    return this.assetConfigForm.get('id');
  }

  get nombre() {
    return this.assetConfigForm.get('nombre');
  }

  open(content): void {
    this.assetConfigModal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    this.assetConfigModal.result.then(() => {
      this.assetConfigForm.reset();
    }).catch(() => {
      this.assetConfigForm.reset();
    });
  }

  public delete(asset): void {
    console.log(asset);
  }

  // GETs
  getAssets() {
    return [{ id: 'CE1001', nombre: 'Monitor', enabled: true }];
  }

  // POSTs
  postDeny(userId: number): boolean {
    console.log(userId);
    return true;
  }

  postAllow(userId: number): boolean {
    console.log(userId);
    return true;
  }

  deleteAsset(activo: string): void {
    console.log(activo);
  }


}
