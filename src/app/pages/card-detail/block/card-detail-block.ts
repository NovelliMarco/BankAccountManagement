import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // ← Import necessario

@Component({
  selector: 'card-detail-block',
  templateUrl: './card-detail-block.html',
  imports: [CommonModule],
  styleUrls: ['./card-detail-block.scss'],
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
