import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-rounded-icon',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rounded-icon.html',
  styleUrl: './rounded-icon.scss',
})
export class RoundedIcon {
  @Input() icon!: string;
}
