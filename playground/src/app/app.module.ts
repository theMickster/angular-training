import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { FacebookLikeComponent } from './facebookLikes/facebookLike.component';
import { ReactiveTrainingComponent } from './reactive-training/reactive-training.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthorData } from './data-access/InMemory/author-data';
import { AuthorListComponent } from './editors/authors/author-list/author-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AuthorData, { delay: 1500 }),
    HttpClientModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AppFooterComponent,
    AppNavbarComponent,
    FacebookLikeComponent,
    ReactiveTrainingComponent,
    AuthorListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
