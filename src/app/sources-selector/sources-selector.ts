import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

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
    {id: '0-a', name: 'All'},
    {id: '1-r', name: 'Reuters'},
    {id: '2-afp', name: 'Agence France-Presse'},
    {id: '3-ap', name: 'Associated Press'}
  ];

  selected = 'All';
  
  @Output() sourceNameChange = new EventEmitter<string>();

  onSourceNameChange(){
    this.sourceNameChange.emit(this.selected);
}

  constructor() { }

  ngOnInit() {
  }
}
