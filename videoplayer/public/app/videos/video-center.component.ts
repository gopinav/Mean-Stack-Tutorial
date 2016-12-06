import { Component } from '@angular/core';
import { Video } from './video';
@Component({
  templateUrl: 'app/videos/video-center.component.html',
})
export class VideoCenterComponent { 
  title: string = "Playlist";
  videos : Array<Video>;
  selectedVideo: Video;
  private shownewVideo: boolean = true;

  constructor(){
      this.videos = [
        {"title": "First Video","url":"https://www.youtube.com/embed/YYnf5vJRuUY","desc":"Test Description 1"},
        {"title": "Second Video","url":"https://www.youtube.com/embed/4YZPfX5sKKI","desc":"Test Description 2"}
      ]
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
