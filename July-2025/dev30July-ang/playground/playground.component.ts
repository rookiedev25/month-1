import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  displayBox: boolean = true;
  displayDiv: boolean = true;
  buttonLabelBox: string = 'box changes here';
  buttonLabelDiv: string = 'div changes here';

  toggleBox(): void {
    if (this.displayBox) {
      this.displayBox = false;
      this.buttonLabelBox = 'click to see box';
    } else {
      this.displayBox = true;
      this.buttonLabelBox = 'click to hide box';
    }
  }

  toggleDiv(): void {
    if (this.displayDiv) {
      this.displayDiv = false;
      this.buttonLabelDiv = 'click to see RED DIV';
    } else {
      this.displayDiv = true;
      this.buttonLabelDiv = 'click to see BLUE DIV';
    }
  }
}
