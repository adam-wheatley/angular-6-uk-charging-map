import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="container-fluid bg-primary p-2 text-center" id="header">
    <h1>
      <img src="./assets/bolt.png" alt="" height="50" class="mb-3 bolt">
        {{title}}
      <img src="./assets/bolt.png" alt="" height="50" class="mb-3 bolt">
    </h1>
    </header>
  `,
  styles:  [`
    #header {
      border-bottom: 5px solid #FAEC00;
    }
    @media (max-width: 576px) {
      .bolt {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  title = 'UK Charging Stations';
}
