import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // Array of navigation items
  navItems = [
    { label: 'Home', link: '', isActive: true },
    { label: 'About us', link: '' },
    { label: 'News', link: '' },
    { label: 'Contact us', link: '' },
  ];
}
