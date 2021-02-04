import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingEachPageComponentComponent } from './scheduling-each-page-component.component';

describe('SchedulingEachPageComponentComponent', () => {
  let component: SchedulingEachPageComponentComponent;
  let fixture: ComponentFixture<SchedulingEachPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingEachPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingEachPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
