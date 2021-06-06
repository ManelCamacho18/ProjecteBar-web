import { Component, OnInit } from '@angular/core';
import { Producte } from '../../models/producte.model';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  arrPosts: any[];
  arrEntrepans: any[];
  arrBegudes: any[];
  arrSnacks: any[];
  arrBrioixeria: any[];
  arrFruita: any[];

  productesSeleccionats: Producte[];

  constructor(private postsService: PostsService) {
    this.productesSeleccionats = [];
    this.arrPosts= [];
    this.arrEntrepans= [];
    this.arrBegudes= [];
    this.arrSnacks= [];
    this.arrBrioixeria= [];
    this.arrFruita= [];
  }

  async ngOnInit() {
    await this.postsService.getAll()
    .then(async (posts)  => await this.arrPosts.push(...posts))
    .catch(error => console.log(error));
    this.splitArrays();
  }

  async onClick(){

  }


  onProducteSeleccionat($event: any){
    this.productesSeleccionats.push($event);
  }


  splitArrays() {
    for (let i = 0; i < this.arrPosts.length; i++) {
      switch (this.arrPosts[i].tipus) {
        case "Begudes":
          this.arrBegudes.push(this.arrPosts[i]);
          break
        case "Entrepans":
          this.arrEntrepans.push(this.arrPosts[i]);
          break
        case "Snacks":
          this.arrSnacks.push(this.arrPosts[i]);
          break
        case "Brioixeria":
          this.arrBrioixeria.push(this.arrPosts[i]);
          break
        case "Fruita":
          this.arrFruita.push(this.arrPosts[i]);
      }
    }
    this.parsePrice();
  }
  parsePrice(){
    for(let i = 0; i < this.arrBegudes.length; i++) {
      let x = this.arrBegudes[i].preu;
      x = x.toFixed(2);
      let int = parseFloat(x);
      this.arrBegudes[i].preu = int;
    }
    for(let i = 0; i < this.arrSnacks.length; i++) {
      let x = this.arrSnacks[i].preu;
      x = x.toFixed(2);
      let int = parseFloat(x);
      this.arrSnacks[i].preu = int;
    }
    for(let i = 0; i < this.arrEntrepans.length; i++) {
      let x = this.arrEntrepans[i].preu;
      x = x.toFixed(2);
      let int = parseFloat(x);
      this.arrEntrepans[i].preu = int;
    }
    for(let i = 0; i < this.arrFruita.length; i++) {
      let x = this.arrFruita[i].preu;
      x = x.toFixed(2);
      let int = parseFloat(x);
      this.arrFruita[i].preu = int;
    }
    for(let i = 0; i < this.arrBrioixeria.length; i++) {
      let x = this.arrBrioixeria[i].preu;
      x = x.toFixed(2);
      let int = parseFloat(x);
      this.arrBrioixeria[i].preu = int;
    }
  }

}
