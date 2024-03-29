import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls:  ['./hero.component.scss']
})
export class HeroComponent {
  @Input() hero: Hero | undefined;
  @Output() delete = new EventEmitter();

  onDeleteClick($event: any): void {
    $event.stopPropagation();
    this.delete.next();
  }
}
