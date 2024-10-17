import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  userType = 'parent'; // or 'student'
  name = 'John Doe';
  email = 'john.doe@example.com';
  phone = '(123) 456-7890';

  constructor() {}
}