import { Component } from '@angular/core';

@Component({
  selector: 'app-count-header',
  imports: [],
  templateUrl: './count-header.component.html',
  styleUrl: './count-header.component.scss',
})
export class CountHeaderComponent {
  count: number = 0;

// first approach --
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
  reset(){
    this.count = 0;
  }

  // second approach --
  operate(option: string) {
    if (option === 'add') {
      this.count += 1;
    } else if (option === 'substract') {
      if (this.count < 0) {
        alert("Operation Failed: Count value can't be less than 0")
      }
      else {
        this.count -= 1;
      }
    } else {
      this.count = 0;
    }
  }
}
