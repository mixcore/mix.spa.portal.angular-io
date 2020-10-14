import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTypeComponent } from './module-type.component';

describe('ModuleTypeComponent', () => {
  let component: ModuleTypeComponent;
  let fixture: ComponentFixture<ModuleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
