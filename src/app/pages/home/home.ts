import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, untracked } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  saldo = 1520.75;

  operazioni = [
    { descrizione: 'Stipendio', importo: 2000, dataEmissione: '10/10/2025' },
    { descrizione: 'Supermercato', importo: -85.4, dataEmissione: '10/10/2025' },
    { descrizione: 'Bolletta luce', importo: -120.6, dataEmissione: '10/10/2025' },
    { descrizione: 'Rimborso assicurazione', importo: 50.0, dataEmissione: '10/10/2025' },
  ];

  showFilters = false;
  user!: User | null;

  constructor(private authService: Auth, private router: Router) {
    this.user = this.authService.loggedUser();
  }

  ngOnInit(): void {}

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
}
