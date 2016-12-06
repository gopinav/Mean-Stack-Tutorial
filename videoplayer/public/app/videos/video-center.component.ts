import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video';
@Component({
  templateUrl: 'app/videos/video-center.component.html',
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit { 
  title: string = "Playlist";
  videos : Array<Video>;
  selectedVideo: Video;
  private shownewVideo: boolean = true;

  constructor(private _videoService: VideoService){}

  ngOnInit(){
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  };
  onCloseDetailForm(event: any){
    this.selectedVideo = null;
  };
  /*
  newVideo(){
    var v: Video = { title: "New Video", url: ""};
    this.videos.push(v);
    this.selectedVideo = v;
  }
  */

  newVideo(){
    this.shownewVideo = false;
  }
}
