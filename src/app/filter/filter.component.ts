import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  term = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(){
    this.searchChange.emit(this.term);
  }

  constructor() { }

  ngOnInit() {
  }

}
