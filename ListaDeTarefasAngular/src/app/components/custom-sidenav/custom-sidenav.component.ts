import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.css'],
})
export class CustomSidenavComponent {
  constructor(private router: Router) {}
  @Input() collapsed: boolean | undefined;
  profilePicSize = () => (this.collapsed ? '32' : '100');

  @Output() menuItemSelected = new EventEmitter<string>();

  navigateTo(route: string, event: Event): void {
    event.preventDefault();
    this.menuItemSelected.emit(route);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'content' },
    { icon: 'calendar_month', label: 'Calendário', route: 'calendar' },
    { icon: 'add_circle', label: 'Criar Tarefa', route: 'dashboard' },
    { icon: 'edit', label: 'Editar Tarefa', route: 'dashboard' },
  ];
}
