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

  constructor(
    private route: ActivatedRoute,
    private PeticionesServiceService: PeticionesServiceService) { }

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
          }
        }
      }
    })
  }

}
