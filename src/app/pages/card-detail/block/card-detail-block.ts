import { Component } from '@angular/core';
import {Location, NgClass} from '@angular/common'; // ← Import necessario

@Component({
  selector: 'card-detail-block',
  templateUrl: './card-detail-block.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./card-detail-block.scss']
})
export class BloccaCarta {
  carta = { bloccata: false };

  constructor(private location: Location) {}

  toggleBlocca() {
    this.carta.bloccata = !this.carta.bloccata;
    alert(this.carta.bloccata ? 'Carta bloccata!' : 'Carta sbloccata!');
  }

  vaiIndietro() {
    this.location.back();
  }
}
