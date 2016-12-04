import { Component, EventEmitter } from '@angular/core';
import { Video } from './video';
@Component({
  selector: 'video-list',
  templateUrl: 'app/videos/video-list.component.html',
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent { 
  title: string = "Playlist";
  videos : Array<Video>;
  public SelectVideo = new EventEmitter();
  onSelect(vid: Video) {
    this.SelectVideo.emit(vid);
  }
}
