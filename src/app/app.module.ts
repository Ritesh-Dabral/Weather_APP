import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importing The MAINCOMPONENT
import { MainComponent } from './main/main.component';
// importing the WEATHERSERVICE
import { WeatherSERVICEService } from './weather-service.service';
// import HTTP module
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherSERVICEService],
  bootstrap: [AppComponent]
})
export class AppModule { }
