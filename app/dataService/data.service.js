System.register(['angular2/core', './mock-projects', './mock-componentStatus', './mock-navigation'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_projects_1, mock_componentStatus_1, mock_navigation_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_projects_1_1) {
                mock_projects_1 = mock_projects_1_1;
            },
            function (mock_componentStatus_1_1) {
                mock_componentStatus_1 = mock_componentStatus_1_1;
            },
            function (mock_navigation_1_1) {
                mock_navigation_1 = mock_navigation_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                }
                DataService.prototype.getProjects = function () {
                    return mock_projects_1.PROJECTS;
                };
                DataService.prototype.getComponentStatus = function () {
                    return mock_componentStatus_1.COMPONENTSTATUS;
                };
                DataService.prototype.setComponentStatus = function () {
                    mock_componentStatus_1.COMPONENTSTATUS.isInitialized = true;
                };
                DataService.prototype.getNavigation = function () {
                    return mock_navigation_1.NAVIGATION;
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            })();
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map