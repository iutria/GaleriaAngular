import { FavoritoServiceService } from './../../services/favorito-service.service';

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() datos : any;
  tags:any=[];
  constructor(private favoritosService: FavoritoServiceService,public router: Router) { }

  ngOnInit(): void {
    this.tags = this.datos.tags.split(','); 
  }

  AddFavoritos(){
    this.favoritosService.disparadorFavoritos.emit(this.datos);
  }
  ir(tipo:string):void{
    this.router.navigate(['/images/',tipo]);
  }
}
