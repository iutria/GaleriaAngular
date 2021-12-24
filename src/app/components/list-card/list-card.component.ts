import { ActivatedRoute } from '@angular/router';
import { Imagen } from './../../models/image';
import { BuscarServiceService } from '../../services/buscar-service.service';
import { PeticionesServiceService } from '../../services/peticiones-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  cards: Array<Imagen> = [];
  i:string = 'item-card';
  c:string='cursor-mano';
  constructor(
    private route: ActivatedRoute,
    private PeticionesServiceService: PeticionesServiceService) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parametros: any) => {
      this.cards = [];
      this.buscar(parametros.params.datos); 
    });
  }
  buscar(txtBuscar: string): void {
    var peticion = txtBuscar == null || txtBuscar == 'all' ? '' : '&q=' + txtBuscar;
    
    console.log(txtBuscar)
    this.PeticionesServiceService.get(peticion)?.subscribe(values => {
      for (let item of values.hits) {
        if (!item.tags.includes('nude')) {
          if (!item.tags.includes('desnudo')) {
            this.cards.push(item);
            if(item.userImageURL==''){
              item.userImageURL='https://cdn-icons.flaticon.com/png/512/2815/premium/2815428.png?token=exp=1639356406~hmac=ccf6e48b46f6b2d22b195e608cdfdf8c';
            }
          }
        }
      }
    })
  }
  getclass(): string {
    var n = Math.floor(Math.random() * (10 - 1)) + 1;
    switch (n) {
      case 2:
        return 'wide';
        break;
      case 1:
        return 'tall';
        break;
        case 3:
        return 'tall';
        break;
      default:
        return '';
        break;
    }

  }


}
