import { Component, OnInit } from '@angular/core';
import {Event} from "../event";
import {EventService} from "../event.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  submitted = false;

  onSubmit() { this.submitted = true; this.addEvent()}
  event = new Event();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  addEvent() {
    this.eventService.addEvent(this.event)
      .subscribe(data => {
        console.log(data)
      })
  }

}
