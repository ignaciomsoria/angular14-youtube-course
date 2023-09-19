import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular14-youtube-course';

  constructor(){
    console.log('hi');
  }

  private getName(name: string): string{
    return 'hi ' + name
  }



}
