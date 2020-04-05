import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../app/articles/article';

@Pipe({
  name: 'filterSelector'
})
export class FilterSelectorPipe implements PipeTransform {

  transform(articles: Article[], source: string): Article[] {
    if (!articles) {
        return [];
    }
    if (!source || source === 'All') {
        return articles;
    }
    source = source.toLowerCase();
    return articles.filter( article => {
      return article.sourceName.toLowerCase().includes(source);
    });
   }
}
