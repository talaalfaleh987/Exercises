import { MaskPipe } from './pipes/mask-sens-pipe/mask-pipe';
import { Component, signal } from '@angular/core';
import { StatusLabelPipe } from './pipes/statusLabel/status-label-pipe';

@Component({
  selector: 'app-root',
  imports: [StatusLabelPipe, MaskPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  fullName = 'tala Faleh';
  emptyString = '';
  numbers = 1234;
}
