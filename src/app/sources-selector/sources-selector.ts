import { Component, OnInit } from '@angular/core';

interface Source {
  id: string;
  name: string;
}

@Component({
  selector: 'sources-selector-component',
  templateUrl: './sources-selector.html',
  styleUrls: ['./sources-selector.css']
})
export class SourcesSelectorComponent implements OnInit {

  sources: Source[] = [
    {id: '0-r', name: 'Reuters'},
    {id: '1-afp', name: 'Agence France-Presse'},
    {id: '2-ap', name: 'Associated Press'}
  ];

  selected = '';
  constructor() { }

  ngOnInit() {
  }
}
