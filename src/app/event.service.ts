import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  url = "http://localhost:3000/events";

  constructor(private http: HttpClient) { }

  /**
   * Get events from the server.
   */
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url)
  }

  /**
   * Add event to the server.
   *
   * @param event Event object that will be added.
   */
  addEvent(event:Event): Observable<Event> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(event);
    return this.http.post<Event>(this.url, body,{'headers':headers})
  }
}
