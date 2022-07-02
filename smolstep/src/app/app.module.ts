import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatListModule } from '@angular/material/list'

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faBars, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faStopwatch, faClock, faHourglass } from '@fortawesome/free-solid-svg-icons';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { DoTaskPageComponent } from './do-task-page/do-task-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeclineTaskSheetComponent } from './do-task-page/decline-task-sheet/decline-task-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    LandingContentComponent,
    DoTaskPageComponent,
    DeclineTaskSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faTemperatureEmpty, faTemperatureHalf, faTemperatureFull, faStopwatch, faClock, faHourglass);
  }
}
