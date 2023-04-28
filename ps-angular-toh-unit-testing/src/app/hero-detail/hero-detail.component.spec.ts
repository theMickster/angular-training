import { ComponentFixture, TestBed, fakeAsync, flush, tick } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { Location } from "@angular/common";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";

describe("Hero Detail Component", () => {
  let mockHeroService, mockActivatedRoute, mockLocation;
  let sut: ComponentFixture<HeroDetailComponent>;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero', 'getHeroes']);
    mockLocation = jasmine.createSpyObj(['back']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return "7";
          },
        },
      },
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Location, useValue: mockLocation },
      ],
    });
    sut = TestBed.createComponent(HeroDetailComponent);
    mockHeroService.getHero.and.returnValue(
      of({ id: 7, name: "Mickey Mantle", strength: 50 })
    );
  });

  it("should render hero name in an h2 tag", () => {
    sut.detectChanges();
    expect(sut.nativeElement.querySelector("h2").textContent).toContain(
      "MICKEY MANTLE"
    );
  });

  it('should call updateHero when save is called, async test v1', (done) => {
    mockHeroService.updateHero.and.returnValue(of({ }));
    sut.detectChanges();
    sut.componentInstance.save();

    setTimeout(() => {
      expect(mockHeroService.updateHero).toHaveBeenCalled();
      done();
    }, 350);

  });

  it('should call updateHero when save is called, async test v2', fakeAsync( () => {
    mockHeroService.updateHero.and.returnValue(of({ }));
    sut.detectChanges();
    sut.componentInstance.save();

    // tick(251); -- There are times when this is necessary and useful
    flush(); // Most of the time we just use this function and let Zone.js figure out what tasks need to be run.
    expect(mockHeroService.updateHero).toHaveBeenCalled();

  }));
});
