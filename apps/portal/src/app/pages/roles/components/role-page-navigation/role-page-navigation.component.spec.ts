import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePageNavigationComponent } from './role-page-navigation.component';

describe('RolePageNavigationComponent', () => {
  let component: RolePageNavigationComponent;
  let fixture: ComponentFixture<RolePageNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePageNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
