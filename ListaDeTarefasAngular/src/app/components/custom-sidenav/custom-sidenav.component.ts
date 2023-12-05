import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/Model/MenuItem';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
  imports:[ CommonModule, FormsModule, MatListModule, MatIconModule]
})

export class CustomSidenavComponent {
  @Input()
  collapsed: boolean | undefined
  profilePicSize = (()=> this.collapsed ? '32' : '100')

  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
  ];

}
