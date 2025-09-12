import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  selector: 'app-user-profile',
  templateUrl: './user-profile.html',
  imports: [RouterLink, CommonModule],
  styleUrls: ['./user-profile.scss'],
  standalone: true,
})
export class UserProfile {
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
}
