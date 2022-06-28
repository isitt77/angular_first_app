import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  message = "";
  clickNum = 0;
  oddNum = false;
  clickCount = [];
  backgroundColor = '';
  color = '';

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.clickNum += 1;
    this.clickCount.push(this.clickCount.length + 1);
    if (this.clickNum % 2 != 0) {
      this.oddNum = true;
      this.message = "Surprise";
    }
    else {
      this.oddNum = false;
    }

  }

  changeColor() {
    if (this.clickNum < 5) {
      this.backgroundColor = 'white';
    }
    else if (this.clickNum > 4) {
      this.backgroundColor = 'blue';
      this.color = 'white';
    }
    return this.backgroundColor, this.color;
  }

}
