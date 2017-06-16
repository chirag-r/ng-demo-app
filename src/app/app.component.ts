import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  feedClick(event:any) {
    console.log('This is the feed event click');
    alert('I am here');
  }
}
