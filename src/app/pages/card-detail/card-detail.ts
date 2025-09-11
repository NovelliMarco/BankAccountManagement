import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, NgClass} from '@angular/common';
import {Modal} from 'bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.html',
  imports: [
    CurrencyPipe,
    DatePipe,
    NgClass
  ],
  styleUrls: ['./card-detail.scss']
})
export class CardDetail {
  carta = {
    numero: '**** **** **** 1234',
    scadenza: '12/27',
    saldo: 1523.75,
    bloccata: false
  };

  constructor(private router: Router) {}

  toggleBlocca() {
    this.carta.bloccata = !this.carta.bloccata;
    // naviga verso la pagina card-detail-block
    this.router.navigate(['/card-detail-block']);
  }

  apriModale() {
    // naviga verso la pagina card-detail-limit
    this.router.navigate(['/card-detail-limit']);
  }

  mostraTransazioni() {
    // naviga verso la pagina card-detail-transaction
    this.router.navigate(['/card-detail-transaction']);
  }
}
