import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  clickHandler() {
    alert("Psst, still under development")
    console.log(this.getStarted())
  }

  getStarted(): string {
    return "hello from getstarted method"
  }
}
