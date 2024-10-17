import { Injectable, ErrorHandler } from '@angular/core';
import { alert } from '@nativescript/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('An error occurred:', error);
    
    alert({
      title: 'Error',
      message: error.toString(),
      okButtonText: 'OK'
    }).then(() => {
      // You can add additional error handling logic here if needed
    });
  }
}