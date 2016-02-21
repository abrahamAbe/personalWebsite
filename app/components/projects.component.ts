import {Component, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/angular2';
import {DataService} from '../dataService/data.service';
import {Project} from '../dataService/project';
import {ComponentStatus} from '../dataService/componentStatus';

@Component({
  templateUrl: './views/projects.html',
  styleUrls: ['./scss/sass/scssSheets/_projects.scss']
})
export class ProjectsComponent implements OnInit {
    projects: Project[];
    componentStatus: ComponentStatus;
    initializedProjectSections: Boolean = false;
    projectsContentWrapperHidden: Boolean = true;
    scrollEnabled: Boolean = false;
    onInitState: Boolean = true;
    currentProjectDescription: number = 0;
    
    ngOnInit() {
        
        var self = this;
        
        this.getProjects();
        this.getComponentStatus();
       
        //initializing project sections
        if(self.initializedProjectSections == false){
            
            setTimeout(function() {
                for(var i = 0; i < 4; i ++){
                    var clickableProject = document.getElementById(i);
                    clickableProject.click();   
                }

                self.initializedProjectSections = true;
                self.onInitState = false;
                self.setComponentStatus();
                
            }, 100);   
        }
    }
     
    getProjects(){
       this.projects = this._dataService.getProjects(); 
    }
    
    getComponentStatus(){
        this.componentStatus = this._dataService.getComponentStatus();
    }
    
    setComponentStatus(){
        this._dataService.setComponentStatus(); 
    }
    
    projectsContentWrapperVisible(){
        return this.projectsContentWrapperHidden;
    }
    
    displayProjectDescription(projectId){
        
        if(this.initializedProjectSections == true){
            this.projectsContentWrapperHidden = false;   
        }
        
        this.currentProjectDescription = projectId;

        if(!this.onInitState){
            this.scrollEnabled = true;   
        }

        var projectsContentWrapper = document.getElementById("projectsContentWrapper"),
            clickableProjectSection = document.getElementById(projectId),
            self = this;
            
        $(clickableProjectSection).click(function(){
            
            if(self.scrollEnabled){
                $('body').scrollTo(projectsContentWrapper ,{duration:'slow', offsetTop : '0'});
                self.scrollEnabled = false;   
            }
        });
    }
    
    getImgPath(imgName){
        return './assets/projectImages/' + imgName;
    }
    
    constructor(private _dataService: DataService) {
          
        //Initializing component ... I don't like this hack, this needs to be fixed.
        var navigationClickable = document.getElementById("projects");
        
        setTimeout(function() {
            navigationClickable.click();
        }, 100); 
    }
}