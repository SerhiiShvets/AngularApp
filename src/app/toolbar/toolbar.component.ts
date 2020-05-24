import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent {

  @Input() searchTerm = '';
  @Output() searchTermChange = new EventEmitter<string>();
  @Output() titleChange = new EventEmitter<string>();
  title = 'All';

  constructor() { }

  onSearchTermChange() {
    this.searchTermChange.emit(this.searchTerm);
  }

  recieveSourceName($event) {
    this.title = $event;
    console.log(this.title);
  }

  onTitleChange() {
    this.titleChange.emit(this.title);
  }

}
