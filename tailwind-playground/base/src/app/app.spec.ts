import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, Header, Footer],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
