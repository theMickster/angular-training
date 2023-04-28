import { TestBed, inject } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

describe('Hero Service Integration Tests', () => {
  let mockMessageService;
  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HeroService,
        {provide: MessageService}
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('getHero', () => {
    it('should call "get" with the correct URL', inject([HeroService], (sut: HeroService) => {
      sut.getHero(3).subscribe(hero =>{
        expect(hero.id).toBe(3);
      });

      const request = httpTestingController.expectOne('api/heroes/3');
      request.flush({id: 3, name: 'Mike Trout', strength: 100});

      expect(request.request.method).toBe("GET");
      httpTestingController.verify();


    }));

  })

});
