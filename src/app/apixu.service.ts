import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

    getWeather(location) {
      return this.http.get('http://api.weatherstack.com/current?access_key=c702ce13e2dc46f4ac738249f9a256fa&query=' + location);
  }
}
