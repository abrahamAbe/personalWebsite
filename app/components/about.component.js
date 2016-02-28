System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                    //leaving for loop here in case more images are added in the future.
                    function preloadImages(array) {
                        if (!preloadImages.list) {
                            preloadImages.list = [];
                        }
                        var list = preloadImages.list;
                        for (var i = 0; i < array.length; i++) {
                            var img = new Image();
                            img.onload = function () {
                                var index = list.indexOf(this);
                                if (index !== -1) {
                                    // remove image from the array once it's loaded
                                    // for memory consumption reasons
                                    list.splice(index, 1);
                                }
                            };
                            list.push(img);
                            img.src = array[i];
                        }
                    }
                    preloadImages(['./assets/profilePicture.png']);
                };
                AboutComponent = __decorate([
                    core_1.Component({
                        templateUrl: './views/about.html',
                        styleUrls: ['./scss/sass/scssSheets/_about.scss']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            })();
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map