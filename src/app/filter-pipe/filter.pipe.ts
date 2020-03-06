import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(articles: any[], searchText: string): any[] {
    if (!articles) {
        return [];
    }
    if (!searchText) {
        return articles;
    }
    searchText = searchText.toLowerCase();
    return articles.filter( article => {
      return article.content.toLowerCase().includes(searchText);
    });
   }
}
