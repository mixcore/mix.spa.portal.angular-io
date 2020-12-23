import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  routeAnimations,
  selectIsAuthenticated
} from '@mixcore/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'mixcore-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  // @ViewChild(MatGridListModule) paginator: MatGridListModule;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }

}
