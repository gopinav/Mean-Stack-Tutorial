import { Component, EventEmitter } from '@angular/core';
import { Video } from './video';
@Component({
  selector: 'video-detail',
  templateUrl: 'app/videos/video-detail.component.html',
  inputs: ['video'],
  outputs: ['closeForm']
})
export class VideoDetailComponent { 
    private editTitle:boolean = false;
    private closeForm = new EventEmitter();
    onTitleClick(){
        this.editTitle=true;
    }
    ngOnChanges(){
        this.editTitle=false;
    }
    onButtonOkClick(){
       this.closeForm.emit({});
    }
}
