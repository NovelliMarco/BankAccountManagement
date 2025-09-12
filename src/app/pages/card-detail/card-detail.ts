import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.html',
  imports: [CommonModule, RouterLink, FormsModule],
  styleUrls: ['./card-detail.scss'],
})
export class CardDetail implements OnInit {
  carta = {
    numero: '**** **** **** 1234',
    scadenza: '12/27',
    saldo: 1523.75,
    bloccata: false,
    limiti: {
      giornaliero: 100,
      mensile: 1000,
      annuale: 5000,
    },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleBlocca() {
    this.carta.bloccata = !this.carta.bloccata;
  }

  saveLimits() {
    alert('Limiti salvati correttamente!');
  }
}
