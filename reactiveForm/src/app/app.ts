import { Component } from '@angular/core';
import { MaskPipe } from './pipes/mask-sens-pipe/mask-pipe';

@Component({
  selector: 'app-root',
  imports: [MaskPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'tala Faleh';
  n2 = '';
  n3 = 1234;
}
