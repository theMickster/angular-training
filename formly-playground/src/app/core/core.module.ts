import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { dataCyExtension } from './extensions/data-cy.extension';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    FeedbackComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CoreRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      extensions: [
       {
         name: 'data-cy-extension',
         extension: dataCyExtension
       }
     ]
    })
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
