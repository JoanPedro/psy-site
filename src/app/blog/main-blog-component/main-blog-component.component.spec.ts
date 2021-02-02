import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlogComponentComponent } from './main-blog-component.component';

describe('MainBlogComponentComponent', () => {
  let component: MainBlogComponentComponent;
  let fixture: ComponentFixture<MainBlogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBlogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
