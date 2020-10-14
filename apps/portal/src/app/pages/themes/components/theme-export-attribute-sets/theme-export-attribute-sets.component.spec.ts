import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeExportAttributeSetsComponent } from './theme-export-attribute-sets.component';

describe('ThemeExportAttributeSetsComponent', () => {
  let component: ThemeExportAttributeSetsComponent;
  let fixture: ComponentFixture<ThemeExportAttributeSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeExportAttributeSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeExportAttributeSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
