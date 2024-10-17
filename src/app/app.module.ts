import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ScheduleComponent } from './schedule/schedule.component'
import { CarpoolComponent } from './carpool/carpool.component'
import { ProfileComponent } from './profile/profile.component'
import { SettingsComponent } from './settings/settings.component'
import { UserService } from './services/user.service'
import { GlobalErrorHandler } from './services/error-handler.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    CarpoolComponent,
    ProfileComponent,
    SettingsComponent
  ],
  providers: [
    UserService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}