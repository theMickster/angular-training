import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'heroes', component: HeroesComponent },
      {path: 'heroes/:id', component: HeroDetailComponent}
    ]),
    SharedModule
  ]
})
export class HeroModule { }
