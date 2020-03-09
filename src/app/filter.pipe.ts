import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './shared/articles-data.service';

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
      return article.heading.toLowerCase().includes(searchTerm);
    });
   }
}
