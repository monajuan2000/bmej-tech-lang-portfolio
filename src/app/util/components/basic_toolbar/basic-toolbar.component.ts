import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-basic-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './basic-toolbar.component.html',
  styleUrl: './basic-toolbar.component.sass',
})
export class BasicToolbarComponent {}
