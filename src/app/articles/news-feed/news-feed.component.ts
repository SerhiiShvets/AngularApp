import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
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

  @Input() searchTerm: string;
  @Input() source: string;
  articles: any[];

  title = 'All';
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() titleChange = new EventEmitter<string>();

  search: string;
  sourceFilter: string;

  firstInResponse: any;
  lastInResponse: any;

  previousStartAt: any[];
  paginationClickedCount: number;
  disableNext: boolean;
  disablePrevious: boolean;


  ngOnInit() {
    this.loadItems();
  }

  constructor(private articleService: ArticleService, private router: Router) { }

  loadItems() {
    this.articleService.articlesCollection
      .snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          console.log('No Data Available');
          return false;
        }
        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;

        this.articles = [];
        for (const article of response) {
          this.articles.push({ key: article.payload.doc.id, ...article.payload.doc.data() });
        }

        // Initialize values
        this.previousStartAt = [];
        this.paginationClickedCount = 0;
        this.disableNext = false;
        this.disablePrevious = false;

        // Push first item to use for Previous action
        this.pushPreviousStartAt(this.firstInResponse);
      }, error => {
        console.log(error);
      });
  }

  // Add document
  pushPreviousStartAt(previousFirstDoc) {
    this.previousStartAt.push(previousFirstDoc);
  }

  // Remove not required document
  popPreviousStartAt(previousFirstDoc) {
    this.previousStartAt.forEach(element => {
      if (previousFirstDoc.data().id === element.data().id) {
        element = null;
      }
    });
  }

  // Return the Doc rem where previous page will startAt
  getPreviousStartAt() {
    if (this.previousStartAt.length > (this.paginationClickedCount + 1)) {
      this.previousStartAt.splice(this.previousStartAt.length - 2, this.previousStartAt.length - 1);
    }
    return this.previousStartAt[this.paginationClickedCount - 1];
  }

  // Date formate
  readableDate(time) {
    const d = new Date(time);
    return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
  }

  deleteArticles() {
    this.articleService.removeAll();
  }

  recieveSourceFilter($event) {
    this.sourceFilter = $event;
  }

  onSearchTermChange(){
    this.searchTermChange.emit(this.searchTerm);
  }

  recieveSourceName($event) {
    this.title = $event;
    console.log(this.title);
  }

  onTitleChange() {
    this.titleChange.emit(this.title);
  }

  createArticle() {
    this.router.navigateByUrl('/add');
  }

  updateArticle(article: Article) {
    this.router.navigateByUrl('/articles/update/' + article.key);
  }

  deleteArticle(article: Article) {
    if (article.key === this.lastInResponse.key) {
      this.articleService.getNextArticle(this.lastInResponse)
        .get()
        .subscribe(response => {
          this.lastInResponse = response.docs[0];
        }, error => {
          console.log(error);
        });
    }
    this.articleService
      .removeArticle(article.key)
      .catch(error => console.log(error));
  }

  previousPage() {
    this.articleService.getArticlesListPrevious(this.getPreviousStartAt(), this.firstInResponse)
      .snapshotChanges()
      .subscribe(response => {
        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;

        this.articles = [];
        // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < response.docs.length; i++ ) {
        //   this.articles.push(response.docs[i]);
        // }
        for (const article of response) {
          this.articles.push({ key: article.payload.doc.id, ...article.payload.doc.data() });
        }

        // Maintaing page no.
        this.paginationClickedCount--;

        // Pop not required value in array
        this.popPreviousStartAt(this.firstInResponse);

        // Enable buttons again
        this.disablePrevious = false;
        this.disableNext = false;
      }, error => {
        this.disablePrevious = false;
      });
  }

  nextPage() {
    this.disableNext = true;
    this.articleService.getArticlesListNext(this.lastInResponse)
      .snapshotChanges()
      .subscribe(response => {
        if (!response.length) {
          this.disableNext = true;
          return;
        }

        this.firstInResponse = response[0].payload.doc;
        this.lastInResponse = response[response.length - 1].payload.doc;

        this.articles = [];
        // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < response.docs.length; i++ ) {
        //   this.articles.push(response.docs[i]);
        // }
        for (const article of response) {
          this.articles.push({ key: article.payload.doc.id, ...article.payload.doc.data() });
        }

        this.paginationClickedCount++;

        this.pushPreviousStartAt(this.firstInResponse);

        this.disableNext = false;
      }, error => {
        this.disableNext = false;
      });
  }
}
