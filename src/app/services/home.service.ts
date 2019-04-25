import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  url = 'https://swapi.co/api/people';

  /* aliasing the HttpClient module to the private variable 'http'
   in the constructor of this class */
  constructor(private http: HttpClient) { }

  /* making request to star wars api for all people data, comes back as object
  with an array results, so have used the pipe method to extract that specific data*/
  getData(): Observable<any> {
    return this.http.get(this.url).pipe(map(res => res.results))
  }
}