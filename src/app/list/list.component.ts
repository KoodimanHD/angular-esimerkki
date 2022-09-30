import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Event} from "../event";
import {catchError, map, Observable, throwError} from "rxjs";
import {EventService} from "../event.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events : Event[] = []
  Object = Object

  constructor(private eventService : EventService) {}

  ngOnInit(): void {
  this.getEvents()
    if(this.events[0].name) {console.log("ON!")}
    console.log("Eventit " + this.events)
  }
  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
    console.log(this.events)
  }

/*
  getKeys(events: Event[]) : void {
    console.log(events[0])
      this.keys = Object.keys(events[0]) as string[]
      this.keys.forEach(function (value) {
        console.log("KEY:" + value)
      })
  }
 */
}
