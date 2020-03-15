import { Injectable } from '@angular/core';

export interface Article {
  id: number;
  heading: string;
  date: Date;
  author: string;
  shortDescription: string;
  content: string;
  sourceUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesDataService {

  newId: number;
  newHeading: string;
  newDate: string;
  newAuthor: string;
  newShortDescription: string;
  newContent: string;
  newSourceUrl: string;
  newArticle: Article;

  constructor() { }

  getData(): Article[] {
          
    return this.articles;
}

  public articles: Article[] = [
    {id: 0, heading: 'Reuters', date: new Date(2020,20,2), author: 'Arthur Conan Doyle', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
    {id: 1, heading: 'Associated Press', date: new Date(2020,20,2), author: 'Jack London', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'},
    {id: 2, heading: 'Agence France-Presse', date: new Date(2020,20,2), author: 'Jules Verne', shortDescription: 'Description', content: 'Some content', sourceUrl: 'http://someurl.com'}
  ];
}