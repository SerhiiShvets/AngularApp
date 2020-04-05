import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
// import { ArticlesDataService } from '../../shared/articles-data.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {

article: Article = new Article();
articleForm: FormGroup;

  // @Input() articles: Article[];

  // testArticles: Observable<any[]>;
  // articlesFL: AngularFireList<any>;
  // keysArticles = [];
  // countArticles: number = 0;
  // submitArticle: any;



  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    // this.articles = this.ArticlesDataService.getData();

    // this.submitArticle = {};

    this.articleForm = new FormGroup({
      heading: new FormControl(),
      date: new FormControl(),
      shortDescription: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
      sourceUrl: new FormControl(),
      sourceName: new FormControl(),
    });
  
    // this.articlesFL = this.db.list('/articles', ref => 
    // ref.limitToFirst(11));
  
    // this.articlesFL.snapshotChanges()
    //   .subscribe(tmp => {
    //     this.keysArticles = tmp;
    //     this.countArticles = tmp.length;
    // });
  }

  onSubmit(): void {
    this.article.heading = this.articleForm.value.heading;
    this.article.date = this.articleForm.value.date;
    this.article.shortDescription = this.articleForm.value.shortDescription;
    this.article.author = this.articleForm.value.author;
    this.article.content = this.articleForm.value.content;
    this.article.sourceUrl = this.articleForm.value.sourceUrl;
    this.article.sourceName = this.articleForm.value.sourceName;

    this.articleService.addArticle(this.article);
  }

  // getArticleById(articleId: string) {
  //   let tmp = '/articles/' + articleId;
  //   this.article = this.db.list(tmp)
  //   .snapshotChanges()
  //   .pipe(map(items => {
  //     return items.map(a => {
  //       const data = a.payload.val();
  //       const key = a.payload.key;

  //       console.log({ key, data });

  //       return { key, data };

  //     });
  //   }));
  // }

  // addArticle(article: Article) {
  //   // this.articlesFL.push({
  //     this.db.list('articles').push({
  //     heading: this.submitArticle.heading,
  //     date: this.submitArticle.date,
  //     shortDescription: this.submitArticle.shortDescription,
  //     author: this.submitArticle.author,
  //     content: this.submitArticle.content,
  //     url: this.submitArticle.sourceUrl
  //   });
  // }

  // deleteArticle(id: string): void {
  //   let tmp = '/articles/' + id;
  //   this.db.object(tmp).remove();
  // }
}