import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ArticleComponent } from '../article/article.component';
import { Article, ArticlesDataService } from '../shared/articles-data.service';
import { CreateArticleComponent } from '../create-article/create-article.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers: [ArticlesDataService],

})

export class NewsFeedComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() searchTerm: string;
  @Input() source: string;

  articles: Article[] = [];
  articlesFL: AngularFireList<any>;
  keysArticles = [];
  countArticles: number = 0;
  article: any;

  ngOnInit() {
    this.articles = this.ArticlesDataService.getData();
  } 

  constructor(private ArticlesDataService: ArticlesDataService, private db: AngularFireDatabase) {

  }

}
