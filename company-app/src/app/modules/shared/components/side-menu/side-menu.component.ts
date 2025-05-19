import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ICONS, MenuItem } from './model/menu-item';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  menuItemsDefault: MenuItem[] = [
    {
      label: 'Dashboard',
      route: '/',
      icon: MENU_ICONS.home,
      isExact: true,
    },
    {
      label: 'Profile',
      route: '/profile',
      icon: MENU_ICONS.profile,
    },
    {
      label: 'Projects',
      route: '/projects',
      icon: MENU_ICONS.projects,
      isExact: true,
    },
    {
      label: 'Notifications',
      route: '/notifications',
      icon: MENU_ICONS.notifications,
    },
  ];
  menuItems: MenuItem[] = input(this.menuItemsDefault);

  isAuthenticated = input(false);

  onSignOut = output();
  onSignIn = output();
}
