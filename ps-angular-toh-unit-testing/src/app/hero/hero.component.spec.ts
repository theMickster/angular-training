import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { By } from "@angular/platform-browser";

describe('HeroComponent', () =>{
    let sut: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        sut = TestBed.createComponent(HeroComponent);

    })

    it('should have the correct hero', () => {
        sut.componentInstance.hero = {id: 7, name: 'Mickey Mantle', strength: 27};
        sut.detectChanges();
        expect(sut.componentInstance.hero.name).toEqual('Mickey Mantle');
    });

    it('should render hero name in anchor tag', () =>{
        sut.componentInstance.hero = {id: 7, name: 'Mickey Mantle', strength: 27};
        sut.detectChanges();

        // Native Element
        expect(sut.nativeElement.querySelector('a').textContent).toContain('Mickey Mantle');

        // Debug Element
        expect(sut.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Mickey Mantle');
    });
})