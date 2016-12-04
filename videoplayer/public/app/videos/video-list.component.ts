import { Component } from '@angular/core';
import { Video } from './video';
@Component({
  selector: 'video-list',
  templateUrl: 'app/videos/video-list.component.html',
})
export class VideoListComponent { 
  title: string = "Playlist";
  videos : Array<Video>;

  constructor(){
      this.videos = [
        {"title": "First Video","url":"www.test.com","desc":"Test Description 1"},
        {"title": "Second Video","url":"www.test.com","desc":"Test Description 2"}
      ]
  }

  onSelect(vid: Video) {
    console.log(JSON.stringify(vid));
  }
}
