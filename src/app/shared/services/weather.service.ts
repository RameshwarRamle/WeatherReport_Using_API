import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  Weather_url: string = environment.weather_url
  constructor(private http:HttpClient) { }


  getweatherdetails(city:string): Observable<any>{
   return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q='
      + city
      + '&appid='
      + environment.weatherkey
      + '&units=metric'
    );
  }
}
