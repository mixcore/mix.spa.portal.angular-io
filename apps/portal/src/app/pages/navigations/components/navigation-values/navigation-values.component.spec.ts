import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationValuesComponent } from './navigation-values.component';

describe('NavigationValuesComponent', () => {
  let component: NavigationValuesComponent;
  let fixture: ComponentFixture<NavigationValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
