import {Component} from 'angular2/core';
import {NgFor} from 'angular2/angular2';
declare var jQuery:any;
@Component({
  templateUrl: './views/projects.html',
  styleUrls: ['./scss/sass/scssSheets/_projects.scss']
})
export class ProjectsComponent {
    
    currentId: number = 1;
    
    onClick(id) {
        this.currentId = id;
        
    }
    
    isVisible(id){
        return id == this.currentId;   
    }
}