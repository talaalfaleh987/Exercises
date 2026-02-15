import { Component, signal } from '@angular/core';
import { StatusLabelPipe } from './pipes/statusLabel/status-label-pipe';
import { Toggle } from './excer3/toggle/toggle';
import { Card } from './excer4/card/card';

@Component({
  selector: 'app-root',
  imports: [Toggle,Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  text: string = 'Enable';
  showToast = signal(false);
  toastMessage = signal('');
  showAlert = signal(false);
  alertMessage = signal('');

  onToggleText(value: boolean) {
    if (!value) {
      this.text = 'Enable';
    } else {
      this.text = 'Disable';
    }
  }
  showNotifications(value: boolean) {
    this.toastMessage.set(value ? 'Notifications Enabled' : 'Notifications Disabled');
    this.showToast.set(true);
    setTimeout(() => {
      this.showToast.set(false);
    }, 2000);
  }

  showConfirmation(value: boolean) {
    console.log('New value:', value);
    this.alertMessage.set(value ? 'Deleted Successfully' : 'Deleted Disabled');
    this.showAlert.set(true);
    setTimeout(() => {
      this.showAlert.set(false);
    }, 2000);
  }
}
