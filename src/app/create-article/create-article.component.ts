import { Component, OnInit, NgModule, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
import { Article, ArticlesDataService } from '../shared/articles-data.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

// export interface Article {
//   id: number;
//   heading: string;
//   date: string;
//   author: string;
//   shortDescription: string;
//   content: string;
//   sourceUrl: string;
// }

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
  providers: [ArticlesDataService]
})
export class CreateArticleComponent implements OnInit {

  @Input() articles: Article[];

  articlesFL: AngularFireList<any>;
  keysArticles = [];
  countArticles: number = 0;
  article: any;
  submitArticle: any;

  articleForm: FormGroup;

  constructor(private ArticlesDataService: ArticlesDataService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.articles = this.ArticlesDataService.getData();

    this.submitArticle = {};

    this.articleForm = new FormGroup({
      heading: new FormControl(),
      date: new FormControl(),
      shortDescription: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
      sourceUrl: new FormControl(),
    });
  
    this.articlesFL = this.db.list('/articles', ref => 
    ref.limitToFirst(11));
  
    this.articlesFL.snapshotChanges()
      .subscribe(tmp => {
        this.keysArticles = tmp;
        this.countArticles = tmp.length;
    });
  }

  onSubmit(): void {
    this.submitArticle.heading = this.articleForm.value.heading;
    this.submitArticle.date = this.articleForm.value.date;
    this.submitArticle.shortDescription = this.articleForm.value.shortDescription;
    this.submitArticle.author = this.articleForm.value.author;
    this.submitArticle.content = this.articleForm.value.content;
    this.submitArticle.sourceUrl = this.articleForm.value.sourceUrl;

    this.addArticle();
    console.log(this.articleForm.value);
  }

  getArticleById(articleId: string) {
    let tmp = '/articles/' + articleId;
    this.article = this.db.list(tmp)
    .snapshotChanges()
    .pipe(map(items => {
      return items.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;

        console.log({ key, data });

        return { key, data };

      });
    }));
  }

  addArticle() {
    this.articlesFL.push({
      heading: this.submitArticle.heading,
      date: this.submitArticle.date,
      shortDescription: this.submitArticle.shortDescription,
      author: this.submitArticle.author,
      content: this.submitArticle.content,
      url: this.submitArticle.sourceUrl
    });
  }

  deleteArticle (id: string): void {
    let tmp = '/articles/' + id;
    this.db.object(tmp).remove();
  }

  // addArticle() {
    
  //   // this.newId = this.articles.length;
  //   // this.newArticle = new Article();
  //   // this.newArticle.heading = this.newHeading;
  //   // this.newArticle.date = this.newDate;
  //   // this.newArticle.author = this.newAuthor;
  //   // this.newArticle.shortDescription = this.newShortDescription;
  //   // this.newArticle.content = this.newContent;
  //   // this.newArticle.sourceUrl = this.newSourceUrl;
  //   // this.articles.push(this.newArticle);
  //   console.log("Article saved");
  // }

}