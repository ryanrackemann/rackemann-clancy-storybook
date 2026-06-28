import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  protected readonly destinations = [
    {
      path: '/library',
      title: 'Library',
      icon: 'menu_book',
      description: 'Take a look at what the baby has already filled their library with.'
    },
    {
      path: '/registry',
      title: 'Registry',
      icon: 'redeem',
      description: 'Check out our Babylist registry and see what helps us most.'
    }
  ];
}
