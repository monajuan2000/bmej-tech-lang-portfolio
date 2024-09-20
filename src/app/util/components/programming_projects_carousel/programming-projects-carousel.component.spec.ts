import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingProjectsCarouselComponent } from './programming-projects-carousel.component';

describe('ProgrammingProjectsCarouselComponent', () => {
  let component: ProgrammingProjectsCarouselComponent;
  let fixture: ComponentFixture<ProgrammingProjectsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingProjectsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingProjectsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
