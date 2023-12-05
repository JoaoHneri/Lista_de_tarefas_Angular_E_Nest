import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
})

export class CustomSidenavComponent {
  @Input()
  collapsed: boolean | undefined
  profilePicSize = (()=> this.collapsed ? '32' : '100')

  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'calendar_month', label: 'Calendário', route: 'Calendar' },
    { icon: 'add_circle', label: 'Criar Tarefa', route: 'dashboard' },
    { icon: 'edit', label: 'Editar Tarefa', route: 'dashboard' },
  ];

}
