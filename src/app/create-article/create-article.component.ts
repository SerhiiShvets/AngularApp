import { Component, OnInit, NgModule } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

interface Article {
  id: number;
  heading: string;
  date: string;
  author: string;
  shortDescription: string;
  content: string;
  sourceUrl: string;
}

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  newId: number;
  newHeading: string;
  newDate: string;
  newAuthor: string;
  newShortDescription: string;
  newContent: string;
  newSourceUrl: string;
  newArticle: Article;

  articles: Article[] = [
    {id: 0, heading: 'Reuters', date: '2/18/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
    {id: 1, heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
    {id: 2, heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'}
  ];

  constructor() { }

  ngOnInit() {
    // this.newArticle = new Article();
  }

  addArticle() {
    // this.newId = this.articles.length;
    // this.newArticle = new Article();
    // this.newArticle.heading = this.newHeading;
    // this.newArticle.date = this.newDate;
    // this.newArticle.author = this.newAuthor;
    // this.newArticle.shortDescription = this.newShortDescription;
    // this.newArticle.content = this.newContent;
    // this.newArticle.sourceUrl = this.newSourceUrl;
    // this.articles.push(this.newArticle);
    console.log("function called");
  }

}
