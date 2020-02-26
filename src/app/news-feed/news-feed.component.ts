import { Component, OnInit, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../create-article/create-article.component';
import { CreateArticleComponent } from '../create-article/create-article.component';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  
  @Input() articles: Article[];
  
  constructor() { }

  ngOnInit() {
  }
}