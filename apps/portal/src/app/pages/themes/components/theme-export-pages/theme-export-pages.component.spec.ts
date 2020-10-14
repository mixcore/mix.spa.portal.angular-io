import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeExportPagesComponent } from './theme-export-pages.component';

describe('ThemeExportPagesComponent', () => {
  let component: ThemeExportPagesComponent;
  let fixture: ComponentFixture<ThemeExportPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeExportPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeExportPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
