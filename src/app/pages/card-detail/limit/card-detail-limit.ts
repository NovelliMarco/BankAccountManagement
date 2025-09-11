import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'card-detail-limit',
  imports: [FormsModule],
  templateUrl: './card-detail-limit.html'
})
export class ImpostaLimite {
  limiti = {
    giornaliero: 0,
    mensile: 0,
    annuale: 0
  };

  constructor(private router: Router) {}

  salva() {
    console.log('Limiti salvati:', this.limiti);
    alert('Limiti salvati correttamente!');
    this.router.navigate(['/']);
  }

  tornaIndietro() {
    this.router.navigate(['/my-card']);
  }
}
