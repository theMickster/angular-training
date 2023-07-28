import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ?? -1;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    debounce( () => {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }, 250, false)();
  }
}

function debounce(func: Function, wait: number, immediate: boolean){
  let timeout: any;

  return function(this: void) {
    let context = this, args = arguments;

    let later = function () {
      timeout = null;
      if(!immediate){
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if(callNow){
      func.apply(context, args);
    }

  }
}
