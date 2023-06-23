import { Injectable } from '@angular/core';

type SeverityType = 'error' | 'success' | 'info' | 'warning';
@Injectable({
  providedIn: 'root',
})
export class BeautyLoggerService {
  log(message: string, severity: SeverityType) {
    console.log(`%c${message}`, this.getSeverityStyles(severity));
  }

  getSeverityStyles(severity: SeverityType) {
    switch (severity) {
      case 'error':
        return 'background: red; color: white; font-size: large;';
      case 'success':
        return 'background: green; color: white; font-size: large;';
      case 'warning':
        return 'background: orange; color: white; font-size: large;';
      case 'info':
        return 'background: blue; color: white; font-size: large;';
      default:
        return;
    }
  }
}
