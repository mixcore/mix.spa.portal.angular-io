import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAdvancedComponent } from './module-advanced.component';

describe('ModuleAdvancedComponent', () => {
  let component: ModuleAdvancedComponent;
  let fixture: ComponentFixture<ModuleAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
