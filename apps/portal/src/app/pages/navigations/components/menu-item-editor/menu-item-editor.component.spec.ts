import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemEditorComponent } from './menu-item-editor.component';

describe('MenuItemEditorComponent', () => {
  let component: MenuItemEditorComponent;
  let fixture: ComponentFixture<MenuItemEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
