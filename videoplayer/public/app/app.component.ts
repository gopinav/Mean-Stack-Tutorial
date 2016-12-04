import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand" href="#">VideoPlayer</a>
                </div>
                <ul class="nav navbar-nav">
                <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
                <li><a routerLink="/videos" routerLinkActive="active">Playlist</a></li>            
                </ul>
              </div>
            </nav>    
            <div class="container">
              <router-outlet></router-outlet>            
            </div>      
        `
})
export class AppComponent { 
  title: string = "Video Player";
}
