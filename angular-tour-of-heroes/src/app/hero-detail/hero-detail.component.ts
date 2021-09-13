import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroService } from '../dataServices/hero.service';
import { Hero } from '../model/hero';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  pageTitle: string = 'Hero Detail';
  errorMessage = '';
  heroServiceSub!: Subscription;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.loadHero(id);
    }
  }

  private loadHero(id: number): void {
    this.heroServiceSub = this.heroService.getHero(id).subscribe({
      next: x => this.hero = x,
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy() {
    this.heroServiceSub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/heroes']);
  }
}
