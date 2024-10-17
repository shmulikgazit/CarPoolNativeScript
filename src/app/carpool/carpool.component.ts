import { Component } from '@angular/core';

@Component({
  selector: 'app-carpool',
  templateUrl: './carpool.component.html',
})
export class CarpoolComponent {
  currentCarpool = {
    time: '7:00 AM',
    driver: 'John Doe',
    passengers: ['Alice', 'Bob', 'Charlie'],
    availableSeats: 1
  };

  constructor() {}
}