"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new core_1.EventEmitter();
        this.deleteVideoEvent = new core_1.EventEmitter();
    }
    VideoDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    VideoDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.onButtonOkClick = function () {
    };
    VideoDetailComponent.prototype.updateVideo = function () {
        console.log(JSON.stringify(this.video));
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.deleteVideo = function () {
        console.log(JSON.stringify(this.video));
        this.deleteVideoEvent.emit(this.video);
    };
    VideoDetailComponent = __decorate([
        core_1.Component({
            selector: 'video-detail',
            templateUrl: 'app/videos/video-detail.component.html',
            inputs: ['video'],
            outputs: ['updateVideoEvent', 'deleteVideoEvent']
        }), 
        __metadata('design:paramtypes', [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map