import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugPlayComponent } from './plug-play.component';

describe('PlugPlayComponent', () => {
  let component: PlugPlayComponent;
  let fixture: ComponentFixture<PlugPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlugPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
