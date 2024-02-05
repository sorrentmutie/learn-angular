import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUserResponse, Result } from '../models/random-user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  url = "https://randomuser.me/api?results=";
  constructor(private httpClient: HttpClient) { }

  getRandomUsers(n: string): Observable<RandomUserResponse> {
    return this.httpClient.get<RandomUserResponse>(this.url + n);
  }

  getResults(n: string): Observable<Result[]> {
    const response =  this.httpClient.get<RandomUserResponse>(this.url + n);
    return response.pipe( map(response => response.results));
  }

}
