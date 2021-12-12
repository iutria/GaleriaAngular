import { Imagen } from './../models/image';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesServiceService {

  url : string = 'https://pixabay.com/api/?key=24633393-e6bfa03fbe79c21f767d10190&lang=es&image_type=photo&order=popular';

  constructor(private http: HttpClient) { }

  public get(parametros:string){
    return this.http.get<any>(this.url+parametros);
  }
}
