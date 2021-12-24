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
  ngOnInit(): void {}  
  constructor(public router: Router){}
  ir(txtBuscar:any,tipo:any):void{
    var tipoBusqueda = tipo.value!=''?'&category='+tipo.value:'';
    var busqueda=txtBuscar.value;
    this.router.navigate(['/images/',busqueda+tipoBusqueda]);
  }
}
