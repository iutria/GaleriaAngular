import { PeticionesServiceService } from './../../services/peticiones-service.service';
import { BuscarServiceService } from './../../services/buscar-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.css']
})
export class SecondaryNavComponent implements OnInit {
  textoDeInput: string='';
  tipo:string='';
  
  ngOnInit(): void {}  
  constructor(public router: Router){}
  pornerTexto(txtBuscar:any):void{
    this.textoDeInput=txtBuscar.value;
  }
  ir():void{
    this.router.navigate(['/images/',this.textoDeInput+this.tipo]);
  }
  ponerTipo(tipo:any){
    this.tipo=tipo.value!=''?'&category='+tipo.value:'';
  }

}
