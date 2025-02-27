import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToReadComponent } from './plan-to-read.component';

describe('PlanToReadComponent', () => {
  let component: PlanToReadComponent;
  let fixture: ComponentFixture<PlanToReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanToReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
