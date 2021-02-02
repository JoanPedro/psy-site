import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNotFoundComponentComponent } from './main-not-found-component.component';

describe('MainNotFoundComponentComponent', () => {
  let component: MainNotFoundComponentComponent;
  let fixture: ComponentFixture<MainNotFoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNotFoundComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNotFoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
