import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.html',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./card-detail.scss'],
})
export class CardDetail implements OnInit {
  carta = {
    numero: '**** **** **** 1234',
    scadenza: '12/27',
    saldo: 1523.75,
    bloccata: false,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleBlocca() {
    this.carta.bloccata = !this.carta.bloccata;
  }
}
