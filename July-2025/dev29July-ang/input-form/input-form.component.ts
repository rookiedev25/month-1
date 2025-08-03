import { Component } from '@angular/core';

@Component({
  selector: 'app-input-form',
  imports: [],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
  // aim is to send message on screen about Login Sucess
  username: string = ""
  
  getUserName(event: Event) {
    console.log((event.target as HTMLInputElement).value)
  }

  setUserName() {
    this.username = "user"
  }

  getUserNameWithTemplate(value: string, event: Event) {
    this.username = value;
    event.preventDefault();
  }

}
