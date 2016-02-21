System.register(['angular2/core', '../dataService/data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1;
    var ProjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            ProjectsComponent = (function () {
                function ProjectsComponent(_dataService) {
                    this._dataService = _dataService;
                    this.initializedProjectSections = false;
                    this.projectsContentWrapperHidden = true;
                    this.scrollEnabled = false;
                    this.onInitState = true;
                    this.currentProjectDescription = 0;
                    //Initializing component ... I don't like this hack, this needs to be fixed.
                    var navigationClickable = document.getElementById("projects");
                    setTimeout(function () {
                        navigationClickable.click();
                    }, 100);
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    var self = this;
                    this.getProjects();
                    this.getComponentStatus();
                    //initializing project sections
                    if (self.initializedProjectSections == false) {
                        setTimeout(function () {
                            for (var i = 0; i < 4; i++) {
                                var clickableProject = document.getElementById(i);
                                clickableProject.click();
                            }
                            self.initializedProjectSections = true;
                            self.onInitState = false;
                            self.setComponentStatus();
                        }, 100);
                    }
                };
                ProjectsComponent.prototype.getProjects = function () {
                    this.projects = this._dataService.getProjects();
                };
                ProjectsComponent.prototype.getComponentStatus = function () {
                    this.componentStatus = this._dataService.getComponentStatus();
                };
                ProjectsComponent.prototype.setComponentStatus = function () {
                    this._dataService.setComponentStatus();
                };
                ProjectsComponent.prototype.projectsContentWrapperVisible = function () {
                    return this.projectsContentWrapperHidden;
                };
                ProjectsComponent.prototype.displayProjectDescription = function (projectId) {
                    if (this.initializedProjectSections == true) {
                        this.projectsContentWrapperHidden = false;
                    }
                    this.currentProjectDescription = projectId;
                    if (!this.onInitState) {
                        this.scrollEnabled = true;
                    }
                    var projectsContentWrapper = document.getElementById("projectsContentWrapper"), clickableProjectSection = document.getElementById(projectId), self = this;
                    $(clickableProjectSection).click(function () {
                        if (self.scrollEnabled) {
                            $('body').scrollTo(projectsContentWrapper, { duration: 'slow', offsetTop: '0' });
                            self.scrollEnabled = false;
                        }
                    });
                };
                ProjectsComponent.prototype.getImgPath = function (imgName) {
                    return './assets/projectImages/' + imgName;
                };
                ProjectsComponent = __decorate([
                    core_1.Component({
                        templateUrl: './views/projects.html',
                        styleUrls: ['./scss/sass/scssSheets/_projects.scss']
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], ProjectsComponent);
                return ProjectsComponent;
            })();
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});
//# sourceMappingURL=projects.component.js.map