import { Component, OnInit, Output EventEmitter } from '@angular/core';
import { getDate } from 'date-fns';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() NavClick = new EventEmitter<void>()
  today = 'day'
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`
  }
  onNavClick() {
    this.NavClick.emit()
  }
}
