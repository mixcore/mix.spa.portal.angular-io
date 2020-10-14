import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdvancedComponent } from './post-advanced.component';

describe('PostAdvancedComponent', () => {
  let component: PostAdvancedComponent;
  let fixture: ComponentFixture<PostAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
