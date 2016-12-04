import { Component } from '@angular/core';
@Component({
  selector: 'my-home',
  template: `<div class="jumbotron">
                 <h1>{{title}}</h1>
             </div>`
})
export class HomeComponent { 
  title: string = "Welcome to VideoPlayer";
}
