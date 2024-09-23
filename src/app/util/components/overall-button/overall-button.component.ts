import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-overall-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './overall-button.component.html',
  styleUrl: './overall-button.component.sass',
})
export class OverallButtonComponent {}
