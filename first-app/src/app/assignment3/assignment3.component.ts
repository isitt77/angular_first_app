import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  message = "";
  clickNum = 0;
  isOddNum = false;
  clickCount = [];
  backgroundColor = '';

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.clickNum += 1;
    this.clickCount.push(this.clickCount.length + 1);
    if (this.clickNum % 2 != 0) {
      this.isOddNum = true;
      this.message = "Surprise";
    }
    else {
      this.isOddNum = false;
    }

  }

  changeColor(i: number) {
    if (i < 4) {
      this.backgroundColor = 'white';
    }
    else if (i > 3) {
      this.backgroundColor = 'blue';
    }
    return this.backgroundColor;
  }

}
