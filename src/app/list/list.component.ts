import { Component, OnInit } from '@angular/core';
import {Event} from "../event";
import {EventService} from "../event.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

/**
 * Component class for listing events.
 */
export class ListComponent implements OnInit {
  events: Event[] = []
  Object = Object

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents()
  }

  /**
   * Get events through eventService.
   */
  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);
  }
}
