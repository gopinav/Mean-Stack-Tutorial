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
var VideoCenterComponent = (function () {
    function VideoCenterComponent() {
        this.title = "Playlist";
        this.shownewVideo = true;
        this.videos = [
            { "title": "First Video", "url": "https://www.youtube.com/embed/YYnf5vJRuUY", "desc": "Test Description 1" },
            { "title": "Second Video", "url": "https://www.youtube.com/embed/4YZPfX5sKKI", "desc": "Test Description 2" }
        ];
    }
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    };
    ;
    VideoCenterComponent.prototype.onCloseDetailForm = function (event) {
        this.selectedVideo = null;
    };
    ;
    /*
    newVideo(){
      var v: Video = { title: "New Video", url: ""};
      this.videos.push(v);
      this.selectedVideo = v;
    }
    */
    VideoCenterComponent.prototype.newVideo = function () {
        this.shownewVideo = false;
    };
    VideoCenterComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/videos/video-center.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], VideoCenterComponent);
    return VideoCenterComponent;
}());
exports.VideoCenterComponent = VideoCenterComponent;
//# sourceMappingURL=video-center.component.js.map