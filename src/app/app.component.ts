import { Component } from '@angular/core';
import { SourcesSelectorComponent } from './sources-selector/sources-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  sourcesSelector: SourcesSelectorComponent;
  sourceName = 'Source name';

}
