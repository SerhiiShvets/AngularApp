import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../app/articles/article';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(articles: Article[], searchTerm: string): Article[] {
    if (!articles) {
        return [];
    }
    if (!searchTerm) {
        return articles;
    }
    searchTerm = searchTerm.toLowerCase();
    return articles.filter( article => {
      return article.content.toLowerCase().includes(searchTerm);
    });
   }
}
