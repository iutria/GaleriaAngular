import { BuscarServiceService } from './../../services/buscar-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html',
  styleUrls: ['./images-component.component.css']
})
export class ImagesComponentComponent implements OnInit {
  cards : Array<any>=[];
  constructor(private route: ActivatedRoute,    
    private BuscarServiceService: BuscarServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametros: any) => {        
        this.buscar(parametros.params.datos);      
    });
  }
  buscar(txtBuscar:string):void{    
    this.BuscarServiceService.DisparadorBuscar.emit(txtBuscar);
  }
}
