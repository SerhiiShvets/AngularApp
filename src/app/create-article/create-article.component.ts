import { Component, OnInit, NgModule, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
import { Article, ArticlesDataService } from '../shared/articles-data.service';

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

articleForm: FormGroup;

  // public articles: Article[] = [
  //   {id: 0, heading: 'Reuters', date: '2/18/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
  //   {id: 1, heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
  //   {id: 2, heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'}
  // ];

  constructor(private ArticlesDataService: ArticlesDataService) { }

  ngOnInit() {
    this.articles = this.ArticlesDataService.getData();
    this.articleForm = new FormGroup({
      heading: new FormControl(),
      date: new FormControl(),
      shortDescription: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
      sourceUrl: new FormControl(),


    });
  }

}