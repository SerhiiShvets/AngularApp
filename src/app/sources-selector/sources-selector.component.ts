import { Component, OnInit } from '@angular/core';

interface Source {
  id: string;
  name: string;
}

@Component({
  selector: 'sources-selector',
  templateUrl: './sources-selector.component.html',
  styleUrls: ['./sources-selector.component.css']
})
export class SourcesSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sources: Source[] = [
    {id: '0-r', name: 'Reuters'},
    {id: '1-afp', name: 'Agence France-Presse'},
    {id: '2-ap', name: 'Associated Press'}
  ];

}
