import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { User } from '../../models/user';
import { RoundedIcon } from '../rounded-icon/rounded-icon';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule, RoundedIcon],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements OnInit {
  @Input() user!: User;
  isCollapsed = false;

  menuItems = [
    {
      label: 'Home',
      icon: 'fas fa-house',
      route: '/home',
    },
    {
      label: 'Carta',
      icon: 'fas fa-credit-card',
      route: '/my-card',
    },
    {
      label: 'Profilo',
      icon: 'fas fa-user',
      route: '/my-profile',
    },
    {
      label: 'Supporto',
      icon: 'fas fa-question',
      route: '/support',
    },
  ];

  constructor(private authService: Auth, private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    document.documentElement.style.setProperty(
      '--sidebar-width',
      this.isCollapsed ? '70px' : '280px'
    );
  }

  toggleSubmenu(item: any): void {
    item.showSubmenu = !item.showSubmenu;
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
