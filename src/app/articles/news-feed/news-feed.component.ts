import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatIconRegistry} from '@angular/material/icon';
import { ArticleComponent } from '../article/article.component';
import { ArticlesDataService } from '../../shared/articles-data.service';
import { CreateArticleComponent } from '../create-article/create-article.component';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ToolbarComponent } from 'src/app/toolbar/toolbar.component';
import { Router } from '@angular/router';

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

  constructor(private articleService: ArticleService, private router: Router) { }

  getArticlesList() {
    this.articleService.getArticlesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(a =>
          ({ key: a.payload.doc.id, ...a.payload.doc.data() })
        )
      )
    ).subscribe(articles => {
      this.articles = articles;
    });
  }

  deleteArticles() {
    this.articleService.removeAll();
  }

  search: string;
  sourceFilter: string;

  recieveSourceFilter($event) {
    this.sourceFilter = $event;
  }

  // @Input() searchTerm = '';
  title = 'All';

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(){
    this.searchTermChange.emit(this.searchTerm);
  }

  recieveSourceName($event){
    this.title = $event;
    console.log(this.title);
  }

  @Output() titleChange = new EventEmitter<string>();

  onTitleChange(){
    this.titleChange.emit(this.title);
  }

  createArticle() {
    this.router.navigateByUrl('/add');
  }

  deleteArticle(article: Article) {
    this.articleService
      .removeArticle(article.key)
      .catch(err => console.log(err));
  }
}
