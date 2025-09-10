import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  saldo = 1520.75;

  operazioni = [
    { descrizione: 'Stipendio', importo: 2000 },
    { descrizione: 'Supermercato', importo: -85.4 },
    { descrizione: 'Bolletta luce', importo: -120.6 },
    { descrizione: 'Rimborso assicurazione', importo: 50.0 },
  ];
}
