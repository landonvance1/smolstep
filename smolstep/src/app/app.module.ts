import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faBars, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faStopwatch, faClock, faHourglass } from '@fortawesome/free-solid-svg-icons';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { DoTaskPageComponent } from './do-task-page/do-task-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    LandingContentComponent,
    DoTaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faStopwatch, faClock, faHourglass);
  }
}
