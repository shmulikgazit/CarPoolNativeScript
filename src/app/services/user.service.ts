import { Injectable } from '@angular/core';
import { getString, setString } from '@nativescript/core/application-settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_DATA_KEY = 'userData';

  constructor() {}

  hasUserData(): boolean {
    return !!getString(this.USER_DATA_KEY);
  }

  async getUserByPhone(phoneNumber: string): Promise<any> {
    const userData = JSON.parse(getString(this.USER_DATA_KEY) || '{}');
    return userData[phoneNumber] || null;
  }

  async saveUserData(phoneNumber: string, data: any): Promise<void> {
    let userData = JSON.parse(getString(this.USER_DATA_KEY) || '{}');
    userData[phoneNumber] = data;
    setString(this.USER_DATA_KEY, JSON.stringify(userData));
  }
}