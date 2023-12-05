import { Component, OnInit } from '@angular/core';

import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-nav-tollbar-c',
  templateUrl: './nav-tollbar-c.component.html',
  styleUrls: ['./nav-tollbar-c.component.css'],
})
export class NavTollbarCComponent implements OnInit {
  collapsed: boolean = false;

  sidenavWidth = () => (this.collapsed ? '65px' : '250px');
  constructor() {}

  ngOnInit(): void {}
}
