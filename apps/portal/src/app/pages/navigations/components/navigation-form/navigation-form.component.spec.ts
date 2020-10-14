import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFormComponent } from './navigation-form.component';

describe('NavigationFormComponent', () => {
  let component: NavigationFormComponent;
  let fixture: ComponentFixture<NavigationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
