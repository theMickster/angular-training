import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display current year in copyright', () => {
    const currentYear = new Date().getFullYear();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(`© 2010-${currentYear} Letofsky Consulting`);
  });

  it('should have current year signal initialized correctly', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear()).toBe(currentYear);
  });

  it('should display complete copyright text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Letofsky Consulting. All rights reserved.');
  });

  it('should have tech-footer class applied', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerElement = compiled.querySelector('footer');
    expect(footerElement?.classList.contains('tech-footer')).toBe(true);
  });
});
