import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Producte } from '../../models/producte.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arrProductes: Producte[];
  arrIds: any[];
  stringIds: string;

  constructor(private postsService: PostsService) {
    this.arrProductes = [];
    this.arrIds = []
    this.stringIds = "";
  }

  ngOnInit(): void {
  }

  calculaTotal() {
    let result = 0;
    for(let producte of this.arrProductes) {
      result += producte.preu;
    }
    return result;
  }

  onClickEliminar(indice: any){
    this.arrProductes.splice(indice, 1);
  }

  async enviarComanda(){
    for(let id = 0; id < this.arrProductes.length; id++){
      this.arrIds.push(this.arrProductes[id].idprod);
    }
    this.stringIds = this.arrIds.toString();
    this.postsService.postCommand(this.stringIds);
    this.arrIds = [];
  }

}
