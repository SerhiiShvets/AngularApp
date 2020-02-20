import { Component, OnInit } from '@angular/core';

interface Article {
  id: string;
  heading: string;
  date: string;
  author: string;
  shortDescription: string;
  content: string;
  sourceUrl: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [
    {id: '0', heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
    {id: '1', heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
    {id: '2', heading: 'Reuters', date: '2/20/2020', author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
