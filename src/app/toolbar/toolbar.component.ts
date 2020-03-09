import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StringifyOptions } from 'querystring';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() searchTerm = '';
  title = 'All';
  // sourcesSelector: SourcesSelectorComponent;
  // articleComponent: ArticleComponent;
  // newsFeedComponent: NewsFeedComponent;
  // createArticleComponent: CreateArticleComponent;
  // filterComponent: FilterComponent;

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(){
    this.searchTermChange.emit(this.searchTerm);
  }

  recieveSourceName($event){
    this.title = $event;
  }

}
