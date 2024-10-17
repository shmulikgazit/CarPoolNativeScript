import { Component, OnInit } from '@angular/core';
import { isAndroid } from '@nativescript/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('AppComponent initialized');
    if (isAndroid) {
      console.log('Running on Android');
    } else {
      console.log('Running on iOS');
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigation completed:', event.url);
      }
    });
  }
}