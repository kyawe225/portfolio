import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Kyaw Zin Htet\'s portfolio';
  current='home';

  active(s:string){
    this.current=s;
  }
}
