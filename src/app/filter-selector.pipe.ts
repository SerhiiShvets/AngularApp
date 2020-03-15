import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './shared/articles-data.service';

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
      return article.heading.toLowerCase().includes(source);
    });
   }
}
