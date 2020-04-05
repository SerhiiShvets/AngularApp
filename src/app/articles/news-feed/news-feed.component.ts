import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ArticleComponent } from '../article/article.component';
import { ArticlesDataService } from '../../shared/articles-data.service';
import { CreateArticleComponent } from '../create-article/create-article.component';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})

export class NewsFeedComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() searchTerm: string;
  @Input() source: string;

  articles: any;

  ngOnInit() {
    this.getArticlesList();
  }

  constructor(private articleService: ArticleService) { }

  getArticlesList() {
    this.articleService.getArticlesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(articles => {
      this.articles = articles;
    });
  }

  deleteCustomers() {
    this.articleService.removeAll();
  }

}
