import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() searchTerm = '';
  title = 'All';

  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(){
    this.searchTermChange.emit(this.searchTerm);
  }

}
