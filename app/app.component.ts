import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstComponent} from './components/first.component';
import {SecondComponent} from './components/second.component';

@Component({
    selector: 'main',
    templateUrl: '../views/main.html',
    styleUrls: ['../scss/sass/scssSheets/_main.scss'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', component: FirstComponent, as: 'Route1'},
  {path:'/route2/:id', component: SecondComponent, as:'Route2'}
])
export class AppComponent{}
