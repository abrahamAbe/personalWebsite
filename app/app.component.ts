import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AboutComponent} from './components/about.component';
import {ResumeComponent} from './components/resume.component';

@Component({
    selector: 'main',
    templateUrl: './views/main.html',
    styleUrls: ['./scss/sass/scssSheets/_main.scss'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', component: AboutComponent, as: 'About'},
  {path:'/resume', component: ResumeComponent, as:'Resume'}
])
export class AppComponent{}
