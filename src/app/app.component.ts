import { Component } from '@angular/core';
import { SourcesSelectorComponent } from './sources-selector/sources-selector';
import { ArticleComponent } from './article/article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CreateArticleComponent} from './create-article/create-article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  sourcesSelector: SourcesSelectorComponent;
  articleComponent: ArticleComponent;
  newsFeedComponent: NewsFeedComponent;
  sourceName = 'Source name';

}
