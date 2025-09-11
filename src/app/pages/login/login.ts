import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private authService: Auth,private router: Router) {}

  onSubmit() {
    // Simulazione login
    if (this.email === 'test@test' && this.password === '1234') {
     // this.router.navigate(['/home']); // reindirizza alla home
       this.authService.login().subscribe({
         next: () => this.router.navigate(['/home']),
         error: () => this.router.navigate(['/home']), // anche in caso di fallback
       });
    } else {
      alert('Credenziali non valide!');
    }
  }
}
