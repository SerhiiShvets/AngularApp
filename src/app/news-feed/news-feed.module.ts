import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsFeedComponent } from './news-feed.component';
import { FilterModule } from '../filter/filter.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from '../filter-pipe/filter.pipe';

@NgModule({
    imports:      [ BrowserModule, FilterModule, Ng2SearchPipeModule],
    declarations: [ NewsFeedComponent, FilterPipe],
    bootstrap:    [ NewsFeedComponent ],
    exports:      [ NewsFeedComponent ]
})
export class NewsFeedModule { }
