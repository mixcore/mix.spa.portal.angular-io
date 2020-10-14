import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeExportModulesComponent } from './theme-export-modules.component';

describe('ThemeExportModulesComponent', () => {
  let component: ThemeExportModulesComponent;
  let fixture: ComponentFixture<ThemeExportModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeExportModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeExportModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
