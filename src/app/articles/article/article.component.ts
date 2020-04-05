import { Component, OnInit, Input } from '@angular/core';
// import { CreateArticleComponent } from '../create-article/create-article.component';
// import { Article } from '../create-article/create-article.component';
import { Article, ArticlesDataService } from '../../shared/articles-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articles: Article[];

  id: number;
  heading: string;
  date: string;
  author: string;
  description: string;
  content: string;
  sourceUrl: string;
  // article: Article;

  article: Article = { id: 0, heading: 'Reuters', date: new Date(2020,20,2), author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someuhttps://material.angular.io/assets/img/examples/shiba2.jpgrl.com' };

  constructor(private ArticlesDataService: ArticlesDataService) { }

  ngOnInit() {
    this.articles = this.ArticlesDataService.getData();
  }
}
