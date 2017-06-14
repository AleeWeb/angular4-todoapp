import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Angular 4", "React", "Underscore"];
  newItem = ""; //Empty brackets. Blank
  pushItem = function() {
    if(this.newItem != "") { //Check if newItem is NOT empty...
      this.items.push(this.newItem); //Then add a new item in the items array
      this.newItem= ""; //Make input EMPTY again after new item added
    }
  }

  removeItem = function(index) { //array index of listed items
      this.items.splice(index, 1); //remove 0 index of array and the 1 item
  }

}
