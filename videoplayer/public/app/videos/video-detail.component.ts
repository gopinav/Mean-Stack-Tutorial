import { Component, EventEmitter } from '@angular/core';
import { Video } from './video';
@Component({
  selector: 'video-detail',
  templateUrl: 'app/videos/video-detail.component.html',
  inputs: ['video'],
  outputs: ['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent { 
    public video: Video;
    private editTitle:boolean = false;
    private updateVideoEvent = new EventEmitter();
    private deleteVideoEvent = new EventEmitter();
    
    onTitleClick(){
        this.editTitle=true;
    }
    ngOnChanges(){
        this.editTitle=false;
    }
    onButtonOkClick(){
      
    }
    updateVideo(){
        console.log(JSON.stringify(this.video));
        this.updateVideoEvent.emit(this.video);
    }
    deleteVideo(){
        console.log(JSON.stringify(this.video));
        this.deleteVideoEvent.emit(this.video);
    }
}
