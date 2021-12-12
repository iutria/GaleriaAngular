import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoritoServiceService {
  @Output() disparadorFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
