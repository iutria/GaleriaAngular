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
      if(this.datos.userImageURL==''){
        this.datos.userImageURL='https://cdn-icons.flaticon.com/png/512/2815/premium/2815428.png?token=exp=1639356406~hmac=ccf6e48b46f6b2d22b195e608cdfdf8c';
      }
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
