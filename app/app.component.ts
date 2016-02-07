import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import {AboutComponent} from './components/about.component';
import {ResumeComponent} from './components/resume.component';
import {ProjectsComponent} from './components/projects.component';

@Component({
    selector: 'main',
    templateUrl: './views/main.html',
    styleUrls: ['./scss/sass/scssSheets/_main.scss'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/', component: AboutComponent, as: 'About'},
  {path:'/resume', component: ResumeComponent, as:'Resume'},
  {path:'/projects', component: ProjectsComponent, as:'Projects'}
])
export class AppComponent{
    
    currentId: number = 1;

    onSelect(id) {
        this.currentId = id;
        $("projects").click();
    }
    
    isSelected(id){
        return id == this.currentId;   
    }
    
    constructor(location: Location) {
        if(location.path() == '/resume'){
            this.currentId = 2;
        }
        else if(location.path() == '/projects'){
            this.currentId = 3;   
        }
        else{
            this.currentId = 1;
        }
    }
}
