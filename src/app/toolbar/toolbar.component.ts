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

}
