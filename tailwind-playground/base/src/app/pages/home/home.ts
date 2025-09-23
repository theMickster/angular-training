import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  coffeeCount = signal(Math.floor(Math.random() * 50) + 10);
  linesOfCode = signal(Math.floor(Math.random() * 9000) + 1000);
  bugsSquashed = signal(Math.floor(Math.random() * 200) + 50);
  happinesLevel = signal(Math.floor(Math.random() * 20) + 80);
}
