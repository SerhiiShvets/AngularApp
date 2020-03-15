import { Component, Input, Output, EventEmitter } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: string;
  sourceFilter: string;

  recieveSourceFilter($event){
    this.sourceFilter = $event;
  }

  @Input() searchTerm = '';
  title = 'All';

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(){
    this.searchTermChange.emit(this.searchTerm);
  }

  recieveSourceName($event){
    this.title = $event;
    console.log(this.title);
  }

  @Output() titleChange = new EventEmitter<string>();

  onTitleChange(){
    this.titleChange.emit(this.title);
  }

  // @Output() searchChange = new EventEmitter<string>();

  // onSearchChange(){
  //   this.searchChange.emit(this.search);
  // }

  // @Output() sourceChange = new EventEmitter<string>();

  // onSourceChange(){
  //   this.sourceChange.emit(this.sourceFilter);
  // }
  
}
