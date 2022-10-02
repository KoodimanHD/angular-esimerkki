import { Component, OnInit } from '@angular/core';
import {Event} from "../event";
import {EventService} from "../event.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

/**
 * Component class for adding events.
 */
export class AddComponent implements OnInit {
  submitted = false;
  event = new Event();

  constructor(private eventService: EventService) { }

  ngOnInit(): void { }

  /**
   * Called when submit button is pressed and form validation is passed.
   */
  onSubmit() {
    this.submitted = true;
    this.addEvent()
  }

  /**
   * Add event through eventService.
   */
  addEvent() {
    this.eventService.addEvent(this.event)
      .subscribe(data => {
        console.log(data)
      })
  }

}
