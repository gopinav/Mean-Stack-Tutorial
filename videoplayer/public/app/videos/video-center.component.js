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
var video_service_1 = require('./video.service');
var VideoCenterComponent = (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        this.title = "Playlist";
        this.shownewVideo = true;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; });
    };
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
            providers: [video_service_1.VideoService]
        }), 
        __metadata('design:paramtypes', [video_service_1.VideoService])
    ], VideoCenterComponent);
    return VideoCenterComponent;
}());
exports.VideoCenterComponent = VideoCenterComponent;
//# sourceMappingURL=video-center.component.js.map