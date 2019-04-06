import { Component, OnInit } from '@angular/core';
import { WeatherSERVICEService } from '../weather-service.service';

@Component({
  selector: '.app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // some hard coded data to be shown on screen
  public weatherdetails = [];

  constructor( private _weatherService: WeatherSERVICEService) { 
  }

  ngOnInit() {
    this._weatherService.getWeatherDetails()
      .subscribe(data => this.weatherdetails = data)

  }


  }
   

