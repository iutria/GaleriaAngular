import { FavoritoServiceService } from './../../services/favorito-service.service';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() datos : any;

  constructor(private favoritosService: FavoritoServiceService) { }

  ngOnInit(): void {
  }

  AddFavoritos(){
    this.favoritosService.disparadorFavoritos.emit(this.datos);
  }
}
