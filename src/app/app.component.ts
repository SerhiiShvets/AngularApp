import { Component, Input } from '@angular/core';
import { SourcesSelectorComponent } from './sources-selector/sources-selector';
import { ArticleComponent } from './article/article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CreateArticleComponent} from './create-article/create-article.component';
import { FilterComponent } from './filter/filter.component';

export interface Article {
  id: number;
  heading: string;
  date: string;
  author: string;
  shortDescription: string;
  content: string;
  sourceUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All';
  sourcesSelector: SourcesSelectorComponent;
  articleComponent: ArticleComponent;
  newsFeedComponent: NewsFeedComponent;
  createArticleComponent: CreateArticleComponent;
  filterComponent: FilterComponent;

  recieveSourceName($event){
    this.title = $event;
  }
}
