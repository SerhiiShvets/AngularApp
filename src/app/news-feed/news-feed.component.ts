import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ArticleComponent } from '../article/article.component';
import { Article, ArticlesDataService } from '../shared/articles-data.service';
import { CreateArticleComponent } from '../create-article/create-article.component';
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


  // displayedColumns: string[] = ['heading'];

  articles: Article[] = [];
  // dataSource = new MatTableDataSource<Article>(articles);

  constructor(private ArticlesDataService: ArticlesDataService) { }

  ngOnInit() {
    this.articles = this.ArticlesDataService.getData();
  } 
}
