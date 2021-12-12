import { FavoritoServiceService } from './../services/favorito-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos:Array<any>=[];

  constructor(private favoritosService: FavoritoServiceService) { }

  ngOnInit(): void {
    this.favoritosService.disparadorFavoritos.subscribe(
      datos => {
        this.favoritos.push(datos);
      }
    );
  }

}
