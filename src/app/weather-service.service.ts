import { Injectable } from '@angular/core';

// importing Http client to get response from server or API
import { HttpClient } from '@angular/common/http';

// importing WEATHER_MODEL from weather_model.ts
import { WEATHER_MODEL } from './weather_model';

// importing observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherSERVICEService {

  // HARD-CODED DATA
  // getWeatherDetails(){
  //   return [
  //     {
  //       temp : 286, pressure: 973.2, humidity: 75, weather_main: "Clear", weather_desc: "clear sky",
  //     },
  //     {
  //       temp : 232, pressure: 32223, humidity: 4, weather_main: "Cloudy", weather_desc: "full of clouds",
  //     }
  //   ];
  // }

public URL = "https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22";
// this 'http' is local variable
  constructor(private http: HttpClient) { } 
  getWeatherDetails(): Observable<WEATHER_MODEL[]>{
    return this.http.get<WEATHER_MODEL[]>(this.URL);

  }
}
