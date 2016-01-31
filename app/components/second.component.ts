import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
  template: `
    <h3>Second Component</h3>
    <p class="styleTest">This is the content of SecondComponent</p>
    <p>Routing Parameter ID: {{id}}</p>
  `,
  styleUrls: ['./scss/sass/scssSheets/_portfolio.scss']
})
export class SecondComponent {}