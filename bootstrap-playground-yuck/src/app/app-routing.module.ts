import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapPlaygroundComponent } from './bootstrap-playground/bootstrap-playground.component';
import { AuthorListComponent } from './editors/authors/author-list/author-list.component';
import { FacebookLikeComponent } from './facebookLikes/facebookLike.component';
import { HomeComponent } from './home/home.component';
import { MaterialPlaygroundComponent } from './material-playground/material-playground.component';
import { ReactiveTrainingComponent } from './reactive-training/reactive-training.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: 'home', component: HomeComponent },
  { path: 'facebook', component: FacebookLikeComponent },
  { path: 'reactiveTraining', component: ReactiveTrainingComponent },
  { path: 'boostrapPlayground', component: BootstrapPlaygroundComponent },
  { path: 'materialPlayground', component: MaterialPlaygroundComponent },
  { path: 'editors/authors', component: AuthorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
