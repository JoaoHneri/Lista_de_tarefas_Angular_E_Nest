import { Component, OnInit } from '@angular/core';
import { ContentComponent } from 'src/app/pages/content/content.component';

import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-nav-tollbar-c',
  templateUrl: './nav-tollbar-c.component.html',
  styleUrls: ['./nav-tollbar-c.component.css'],
})
export class NavTollbarCComponent {
  collapsed: boolean = false;

  sidenavWidth = () => (this.collapsed ? '65px' : '250px');
  constructor() {}

  selectedComponent: any = '';
  selectChildComponent: any = '';

  receiveDataFromChild(data: string) {
    this.selectChildComponent = data;
  }

  // handleMenuItemSelected(): void {
  //   switch (this.selectChildComponent) {
  //     case 'content':
  //       this.selectedComponent = ContentComponent;
  //       break;
  //     default:
  //       this.selectedComponent = null;
  //       break;
  //   }
  // }
}
