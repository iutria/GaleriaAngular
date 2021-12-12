import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textoDeInput:string = '';
  tipo:string='';
  constructor(public router: Router){}
  ngOnInit(): void {}
  pornerTexto(txtBuscar:any):void{
    this.textoDeInput=txtBuscar.value;
  }
  ponerTipo(tipo:any){
    this.tipo=tipo.value!=''?'&category='+tipo.value:'';
  }
  ir():void{
    this.router.navigate(['/images/',this.textoDeInput+this.tipo]);
  }
}
