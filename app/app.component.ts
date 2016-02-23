import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';
import {DataService} from './dataService/data.service';

import {AboutComponent} from './components/about.component';
import {ResumeComponent} from './components/resume.component';
import {ProjectsComponent} from './components/projects.component';

@Component({
    selector: 'main',
    templateUrl: './views/main.html',
    styleUrls: ['./scss/sass/scssSheets/_main.scss'],
    directives: [ROUTER_DIRECTIVES],
    providers: [DataService]
})

@RouteConfig([
  {path:'/', component: AboutComponent, as: 'About'},
  {path:'/resume', component: ResumeComponent, as:'Resume'},
  {path:'/projects', component: ProjectsComponent, as:'Projects'}
])

export class AppComponent{
    
    currentNavigationId: number = 1;
    
    onSelect(id) {
        this.currentNavigationId = id;
    }
    
    isSelected(id){
        return id == this.currentNavigationId;   
    }
    
    constructor(private _dataService: DataService, location: Location) {
        
        //hacking location status so page refresh doesn't break the app
        if(location.path() == '/resume'){
            this.currentNavigationId = 2;
        }
        else if(location.path() == '/projects'){
            this.currentNavigationId = 3; 
        }
        else{
            this.currentNavigationId = 1;
        }            
    }
}
