import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MovieDataService } from './movie-data.service';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    MovieDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
