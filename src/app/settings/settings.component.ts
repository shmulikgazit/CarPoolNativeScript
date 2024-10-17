import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  userType: 'student' | 'parent' = 'student';
  phoneNumber = '';
  name = '';
  email = '';
  school = '';
  grade = '';
  vehicleCapacity = 0;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      this.userType = params['userType'];
      this.phoneNumber = params['phoneNumber'];
      
      const userData = await this.userService.getUserByPhone(this.phoneNumber);
      if (userData) {
        this.populateUserData(userData);
      }
    });
  }

  private populateUserData(userData: any) {
    this.name = userData.name || '';
    this.email = userData.email || '';
    this.school = userData.school || '';
    this.grade = userData.grade || '';
    this.vehicleCapacity = userData.vehicleCapacity || 0;
  }

  async onSave() {
    const userData = {
      userType: this.userType,
      phoneNumber: this.phoneNumber,
      name: this.name,
      email: this.email,
      school: this.school,
      grade: this.grade,
      vehicleCapacity: this.vehicleCapacity
    };

    await this.userService.saveUserData(this.phoneNumber, userData);
    console.log('Settings saved', userData);
    this.routerExtensions.navigate(['/schedule'], { clearHistory: true });
  }
}