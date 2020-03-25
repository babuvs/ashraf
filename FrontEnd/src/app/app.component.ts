import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestApp';

  onActivate(e) {
    if (e.constructor.name) {
      console.log(e.constructor);
            window.scroll(0,20);
    }
  }
}
