import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardComponentComponent } from './home-card-component.component';

describe('HomeCardComponentComponent', () => {
  let component: HomeCardComponentComponent;
  let fixture: ComponentFixture<HomeCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
