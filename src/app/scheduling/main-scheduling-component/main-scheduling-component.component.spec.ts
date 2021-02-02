import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSchedulingComponentComponent } from './main-scheduling-component.component';

describe('MainSchedulingComponentComponent', () => {
  let component: MainSchedulingComponentComponent;
  let fixture: ComponentFixture<MainSchedulingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSchedulingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSchedulingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
