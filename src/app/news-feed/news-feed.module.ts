import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsFeedComponent } from './news-feed.component';
import { FilterModule } from '../filter/filter.module';

@NgModule({
    imports:      [ BrowserModule, FilterModule],
    declarations: [ NewsFeedComponent],
    bootstrap:    [ NewsFeedComponent ],
    exports:      [ NewsFeedComponent ]
})
export class NewsFeedModule { }
