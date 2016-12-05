import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent }   from './app.component';
import { VideoListComponent } from './videos/video-list.component';
import { VideoDetailComponent } from './videos/video-detail.component';
import { SafePipe } from './safe.pipe';
import { Video } from './videos/video';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, routingComponents, VideoDetailComponent, VideoListComponent, SafePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
