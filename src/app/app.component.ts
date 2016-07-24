/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.bootstrap.css',
    './app.animate.css',
    './app.style.css'
  ],
  template: `
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
                <a class="navbar-brand header-des-logo" data-scroll href="#home">
                    <img [src]="pitchmanLogo" [alt]="name">
                </a>
                <div class="collapse navbar-collapse" id="main-menu">
                    <ul class="nav navbar-nav navbar-left">
                        <li class="hide active">
                          <a [routerLink]=" ['./'] ">
                          Home
                          </a>
                        </li>
                        <li><a [routerLink]=" ['./detail'] ">RESERVED SEATING</a></li>
                        <li><a [routerLink]=" ['./detail'] ">CLUB Seating</a></li>
                        <li><a [routerLink]=" ['./detail'] ">Club SPACES</a></li>
                        <li><a [routerLink]=" ['./detail'] ">ALL INCLUSIVE SEATING</a></li>
                        <li><a [routerLink]=" ['./contact'] ">Contact</a></li>
                    </ul>
                </div>
                <a href="javascript:void(0);" class="share-btn">
                    <img [src]="shareIcon" alt="share" />
                </a>
        </div>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  pitchmanLogo = '/assets/images/logo.jpg';
  shareIcon = '/assets/images/share-btn.png';
  name = 'Pitchman';
  url = '/';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
