import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "../hero/hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { Directive, Input } from "@angular/core";

/**
 * * Angular's OOB way to create a stub to listen/replace the built-in router link directive.
 */
@Directive({
  selector: '[routerLink]',
  host:{'(click)': 'onClick()'}
})
export class RouterLinkDirectiveStub{
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('Heroes Component Deep Integration Tests', () => {
  let sut: ComponentFixture<HeroesComponent>;
  let heroesList: Hero[];
  let mockHeroService;

  beforeEach(() => {
    heroesList = [
      { id: 1, name: 'Babe Ruth', strength: 18 },
      { id: 2, name: 'Honus Wagner', strength: 15 },
      { id: 3, name: 'Cy Young', strength: 17 },
      { id: 4, name: 'Rogers Hornsby', strength: 19 },
      { id: 5, name: 'Ty Cobb', strength: 16 },
      { id: 6, name: 'Walter Johnson', strength: 18 },
      { id: 7, name: 'Lou Gerhig', strength: 15 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      //schemas: [NO_ERRORS_SCHEMA]
    })

    sut = TestBed.createComponent(HeroesComponent);
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();
  });

  it('should render each hero as a hero component', () => {
    const heroComponentElements = sut.debugElement.queryAll(By.directive(HeroComponent));

    expect(heroComponentElements.length).toBe(7);
    expect( heroComponentElements[2].componentInstance.hero.name).toEqual('Cy Young');

    for(let i = 0; i < heroComponentElements.length; i++) {
      expect( heroComponentElements[i].componentInstance.hero).toEqual(heroesList[i]);
    }

  });

  it('should call heroService.deleteHero when the delete button is clicked, v1 via button click', ()=> {
    spyOn(sut.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();

    const heroComponents = sut.debugElement.queryAll(By.directive(HeroComponent));
    heroComponents[0].query(By.css('button')).triggerEventHandler('click',{stopPropagation: () => {}});

    expect(sut.componentInstance.delete).toHaveBeenCalledWith(heroesList[0]);

  });

  it('should call heroService.deleteHero when the delete button is clicked, v2 via event emit', ()=> {
    spyOn(sut.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();

    const heroComponents = sut.debugElement.queryAll(By.directive(HeroComponent));
    (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);

    expect(sut.componentInstance.delete).toHaveBeenCalledWith(heroesList[0]);

  });

  it('should call heroService.deleteHero when the delete button is clicked, v3 via triggering debug element', ()=> {
    spyOn(sut.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();

    const heroComponents = sut.debugElement.queryAll(By.directive(HeroComponent));
    heroComponents[0].triggerEventHandler('delete', null);

    expect(sut.componentInstance.delete).toHaveBeenCalledWith(heroesList[0]);

  });

  it('should add a new hero to list when add button is clicked', () =>{
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();
    const newHero = 'Shohei Ohtani';
    mockHeroService.addHero.and.returnValue(of({id: 25, name: newHero, strength: 4}));
    const inputElement = sut.debugElement.query(By.css('input')).nativeElement;
    const addButton = sut.debugElement.queryAll(By.css('button'))[0];

    inputElement.value = newHero;
    addButton.triggerEventHandler('click', null);

    sut.detectChanges();

    const heroTest = sut.debugElement.query(By.css('ul')).nativeElement.textContent;
    expect(heroTest).toContain(newHero);
  })

  it('should have the correct route for the second hero "Honus Wagner"', () => {
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();
    const heroComponents = sut.debugElement.queryAll(By.directive(HeroComponent));

    let routerLink = heroComponents[1].query(By.directive(RouterLinkDirectiveStub))
        .injector.get(RouterLinkDirectiveStub);

    heroComponents[1].query(By.css('a')).triggerEventHandler("click", null);

    expect(routerLink.navigatedTo).toBe('/detail/2');
  });

});
