import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements OnInit {
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

  constructor() {}

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
}
