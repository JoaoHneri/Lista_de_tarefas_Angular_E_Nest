import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from 'src/app/components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-nav-tollbar-c',
  templateUrl: './nav-tollbar-c.component.html',
  styleUrls: ['./nav-tollbar-c.component.css'],
  standalone: true,
  imports:[MatToolbarModule, MatSlideToggleModule,MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent],
})
export class NavTollbarCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
