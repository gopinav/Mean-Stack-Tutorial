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
  private hidenewVideo: boolean = true;

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

  newVideo(){
    this.hidenewVideo = false;
  }

  onSubmit(video: Video)
  {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {this.videos.push(resNewVideo);
                                 this.hidenewVideo = true;
                                 this.selectedVideo = resNewVideo;});
    
  }
}
