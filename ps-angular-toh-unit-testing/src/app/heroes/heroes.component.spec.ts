import { Component, Input } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component";
import { By } from "@angular/platform-browser";

describe('Heroes Component Unit Tests', () => {
  let sut: HeroesComponent;
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
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    sut = new HeroesComponent(mockHeroService);
  });

  describe('delete hero', () => {
    it('should delete the second hero from hero list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      sut.heroes = heroesList;

      expect(sut.heroes.length).toBe(7);

      sut.delete(heroesList[1]);

      expect(sut.heroes.length).toBe(6);

      expect(sut.heroes).toEqual(
        [heroesList[0], heroesList[2], heroesList[3], heroesList[4], heroesList[5], heroesList[6]]
      )
    })

    it('should correctly call the delete method of the hero service', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      sut.heroes = heroesList;
      expect(sut.heroes.length).toBe(7);

      sut.delete(heroesList[3]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroesList[3]);
    });

  });

});

describe('Heroes Component Shallow Integration Tests', () => {
  let sut: ComponentFixture<HeroesComponent>;
  let heroesList: Hero[];
  let mockHeroService;

  @Component({ selector: 'app-hero', template: '<div id="fakeHeroDiv"></div>' })
  class FakeHeroComponent {
    @Input() hero: Hero;
  }

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

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHeroes', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        FakeHeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: []
    })

    sut = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from service', () => {
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();

    expect(sut.componentInstance.heroes.length).toBe(7);
  })

  it('should create one list element for each hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(heroesList));
    sut.detectChanges();

    expect(sut.debugElement.queryAll(By.css('li')).length).toBe(7);
  });

});
