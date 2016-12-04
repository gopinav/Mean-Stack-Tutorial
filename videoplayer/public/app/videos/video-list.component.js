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
var VideoListComponent = (function () {
    function VideoListComponent() {
        this.title = "Playlist";
        this.videos = [
            { "title": "First Video", "url": "www.test.com", "desc": "Test Description 1" },
            { "title": "Second Video", "url": "www.test.com", "desc": "Test Description 2" }
        ];
    }
    VideoListComponent.prototype.onSelect = function (vid) {
        console.log(JSON.stringify(vid));
    };
    VideoListComponent = __decorate([
        core_1.Component({
            selector: 'video-list',
            templateUrl: 'app/videos/video-list.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
//# sourceMappingURL=video-list.component.js.map