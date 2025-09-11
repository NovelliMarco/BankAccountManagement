import { Component, effect, OnInit, signal, untracked } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Auth } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  protected readonly title = signal('BankAccountManagement');
  user: any;

  constructor(private authService: Auth, private router: Router) {}

  ngOnInit(): void {
    // this.authService.login().subscribe({
    //   next: () => this.router.navigate(['/home']),
    //   error: () => this.router.navigate(['/home']), // anche in caso di fallback
    // });
  }

  private userEffect = effect(() => {
    this.user = this.authService.loggedUser();
    untracked(() => {
      if (!this.user) {
        this.router.navigate(['login']);
      }
    });
  });
}
