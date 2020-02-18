import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ArticleComponent } from './article/article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SourcesSelectorComponent } from './sources-selector/sources-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ArticleComponent,
    NewsFeedComponent,
    SourcesSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
