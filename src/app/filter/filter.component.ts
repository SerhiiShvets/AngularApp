import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  searchTerm:string;

  constructor() { }

  ngOnInit() {
  }

}
