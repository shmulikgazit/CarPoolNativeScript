import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent {
  schedules = [
    { time: '7:00 AM - 9:00 AM', type: 'Morning', status: 'Scheduled' },
    { time: '1:00 PM - 3:00 PM', type: 'Afternoon', status: 'Available' },
  ];

  constructor() {}
}