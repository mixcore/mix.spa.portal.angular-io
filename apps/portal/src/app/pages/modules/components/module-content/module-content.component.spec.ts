import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleContentComponent } from './module-content.component';

describe('ModuleContentComponent', () => {
  let component: ModuleContentComponent;
  let fixture: ComponentFixture<ModuleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
