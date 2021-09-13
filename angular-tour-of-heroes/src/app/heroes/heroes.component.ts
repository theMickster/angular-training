import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeroService } from '../dataServices/hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  heroServiceSub!: Subscription;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroServiceSub = this.heroService.getHeroes().subscribe({
      next: x => {
        this.heroes = x;
      },
      error: e => this.errorMessage
    });
  }

  ngOnDestroy() {
    this.heroServiceSub.unsubscribe();
  }

}
