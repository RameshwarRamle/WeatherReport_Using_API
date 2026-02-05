import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cityname: string = '';
  weatherarr: any[] = [];
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.getweather();
  }

  getweather() {
    if (this.cityname) {
      this.weatherservice.getweatherdetails(this.cityname).subscribe({
        next:(res) => {
          this.weatherarr = [res];
          this.cityname = ''
        },
        
        error:(err) =>{
          if(err.status === 404){
            console.log('Please Enter Correct City')
          }
        }
      });
    }
  }
}
