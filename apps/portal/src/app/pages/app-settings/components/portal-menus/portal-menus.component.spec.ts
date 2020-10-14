import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalMenusComponent } from './portal-menus.component';

describe('PortalMenusComponent', () => {
  let component: PortalMenusComponent;
  let fixture: ComponentFixture<PortalMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
