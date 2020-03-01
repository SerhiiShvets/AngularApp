import { Component, Input } from '@angular/core';
import { SourcesSelectorComponent } from './sources-selector/sources-selector';
import { ArticleComponent } from './article/article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CreateArticleComponent} from './create-article/create-article.component';
import { ArticlesDataService } from './articles-data-service/articles-data.service';

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
  styleUrls: ['./app.component.css'],
  providers: [ArticlesDataService]
})
export class AppComponent {
  title = 'All';
  sourcesSelector: SourcesSelectorComponent;
  articleComponent: ArticleComponent;
  newsFeedComponent: NewsFeedComponent;
  createArticleComponent: CreateArticleComponent;

  recieveSourceName($event){
    this.title = $event;
  }
}

const articles: Article[] = [
  {id: 0, heading: 'Reuters', date: '2/18/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
  {id: 1, heading: 'Associated Press', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
  {id: 2, heading: 'Agence France-Presse', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'}
];
