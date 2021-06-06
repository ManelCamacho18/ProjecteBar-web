import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Producte } from 'src/app/models/producte.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titol: string;
  @Input() productes: Producte[];

  @Output() producteSeleccionat: EventEmitter<Producte>;

  constructor() {
    this.titol = "";
    this.productes = [];
    this.producteSeleccionat = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pProducte: any){
    this.producteSeleccionat.emit(pProducte);
  }
}
