import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
})

export class CustomSidenavComponent {
  constructor(private router: Router){}
  @Input()
  collapsed: boolean | undefined
  profilePicSize = (()=> this.collapsed ? '32' : '100')

  logOut():void{
    localStorage.clear();
    this.router.navigate(['/login']);

  }
  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'calendar_month', label: 'Calendário', route: 'Calendar' },
    { icon: 'add_circle', label: 'Criar Tarefa', route: 'dashboard' },
    { icon: 'edit', label: 'Editar Tarefa', route: 'dashboard' },
  ];

}
