import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  url = "http://localhost:3000/events";

  constructor(private http: HttpClient) { }

  /**
   * Get events from the server
   */
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url)
      .pipe(
        tap(_ => console.log('Events get'))
      );
  }
}
