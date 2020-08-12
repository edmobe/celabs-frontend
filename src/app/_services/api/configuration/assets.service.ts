import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  
}
