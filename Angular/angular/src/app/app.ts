import { Component, signal } from '@angular/core';
import { Header } from "./00-Angular-Setup-and-Components-Foundation/header/header";
import { Users } from "./00-Angular-Setup-and-Components-Foundation/users/users";

@Component({
  selector: 'app-root',
  imports: [ Header, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
