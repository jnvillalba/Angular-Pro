import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ICONS, MenuItem, TitleColor } from './model/menu-item';

@Component({
  selector: 'jnvr-side-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './jnvr-side-menu.component.html',
  styles: ``,
})
export class JnvrSideMenuComponent {
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
  menuItems = input<MenuItem[]>(this.menuItemsDefault);

  titleColor = input<TitleColor>(TitleColor.blue);

  isAuthenticated = input(false);

  onSignOut = output();
  onSignIn = output();
}
