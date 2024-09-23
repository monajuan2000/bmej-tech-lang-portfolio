import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallButtonComponent } from './overall-button.component';

describe('OverallButtonComponent', () => {
  let component: OverallButtonComponent;
  let fixture: ComponentFixture<OverallButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
