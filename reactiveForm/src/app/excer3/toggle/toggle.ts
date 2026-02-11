import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css',
})
export class Toggle {
  label = input<string>('Enable');
  initialOn = input<boolean>(false);
  disabled = input<boolean>(false);

  toggled = output<boolean>();

  isOn = signal<boolean>(this.initialOn());

  onToggle(event: Event) {
    if (this.disabled()) {
      return;
    }
    const checked = (event.target as HTMLInputElement).checked;
    this.isOn.set(checked);
    this.toggled.emit(checked);
  }
}
