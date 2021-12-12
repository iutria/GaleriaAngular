import { PeticionesServiceService } from './../services/peticiones-service.service';


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: ElementRef | undefined;
  datos: any;
  tags:any=[];
  constructor(
    private route: ActivatedRoute, 
    private PeticionesServiceService: PeticionesServiceService,
    public router: Router) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((parametros: any) => {
      this.cargarDatos(parametros.params.id);
    });
  }
  private cargarDatos(id: string) {
    this.PeticionesServiceService.get('&id=' + id)?.subscribe(values => {
      this.datos = values.hits[0];
      console.log(this.datos)
      this.tags = this.datos.tags.split(',');      
    },error=> {
      this.router.navigate(['/images/all']);
    })
  }
  ir(tipo:string):void{
    this.router.navigate(['/images/',tipo]);
  }
}
