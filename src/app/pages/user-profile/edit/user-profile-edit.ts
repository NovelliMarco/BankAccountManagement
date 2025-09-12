import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  conto: string;
  iban: string;
  professione: string;
  codiceFiscale: string;
  residenza: string;
  documento: string;
  numeroDocumento: string;
}

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./user-profile-edit.scss'],
})
export class UserProfileEdit {
  user: User = {
    nome: 'Marco',
    cognome: 'Rossi',
    email: 'marco.rossi@email.com',
    telefono: '+39 333 1234567',
    conto: 'Conto Corrente Privato',
    iban: 'IT60X0542811101000000123456',
    professione: 'Ingegnere Software',
    codiceFiscale: 'RSSMRC85M01H501X',
    residenza: 'Via Roma 10, 00100 Roma, Italia',
    documento: "Carta d'Identità",
    numeroDocumento: 'AB1234567',
  };

  constructor(private router: Router) {}

  save() {
    // Qui puoi aggiungere chiamata a API per salvare i dati
    this.user = this.user;
    this.router.navigate(['/my-profile']);
  }

  close() {
    this.router.navigate(['/my-profile']);
  }
}
