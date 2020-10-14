import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdvancedComponent } from './page-advanced.component';

describe('PageAdvancedComponent', () => {
  let component: PageAdvancedComponent;
  let fixture: ComponentFixture<PageAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
