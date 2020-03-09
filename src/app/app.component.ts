import { Component, Input, Output, EventEmitter } from '@angular/core';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  search: string;

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(){
    this.searchChange.emit(this.search);
  }

  // recieveSearch($event){
  //   this.search = $event;
  // }
  
}
