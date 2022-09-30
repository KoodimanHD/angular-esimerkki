import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Event} from "../event";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: Event[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvents()
  }

  getEvents(): void {
    // @ts-ignore
    this.http.get('http://localhost:3000/events').subscribe((res: Event[]) => {
      this.events = res
      console.log(this.events)
    })
  }
}
