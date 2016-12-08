import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';
import { Video } from './video';
@Component({
  templateUrl: 'app/videos/video-center.component.html',
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit { 
  updateVideo : Video;
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
  

  newVideo(){
    this.hidenewVideo = false;
  }

  onSubmitAddVideo(video: Video)
  {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {this.videos.push(resNewVideo);
                                 this.hidenewVideo = true;
                                 this.selectedVideo = resNewVideo;});
    
  }

  onUpdateVideoEvent(video: any){
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);  
    this.selectedVideo = null;
  };

  onDeleteVideoEvent(video: any){
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo => video = null);  
    this.selectedVideo = null;
  };
}
