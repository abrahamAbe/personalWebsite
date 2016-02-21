import {Injectable} from 'angular2/core';
import {PROJECTS} from './mock-projects';
import {COMPONENTSTATUS} from './mock-componentStatus';
import {NAVIGATION} from './mock-navigation';

@Injectable()
export class DataService{
    getProjects(){
        return PROJECTS;   
    }
    
    getComponentStatus(){
        return COMPONENTSTATUS;
    }
    
    setComponentStatus(){
        COMPONENTSTATUS.isInitialized = true;
    }
    
    getNavigation(){
        return NAVIGATION;
    }   
}