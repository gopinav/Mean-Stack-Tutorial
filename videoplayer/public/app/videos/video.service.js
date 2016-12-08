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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        this._getUrl = "/api/videos";
        this._postUrl = "/api/video";
        this._putUrl = "/api/video/";
        this._deleteUrl = "/api/video/";
    }
    VideoService.prototype.getVideos = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.addVideo = function (video) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.updateVideo = function (video) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map