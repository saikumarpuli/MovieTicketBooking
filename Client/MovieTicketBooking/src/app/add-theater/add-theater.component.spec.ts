import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheaterComponent } from './add-theater.component';
// @ts-ignore
import {describe,beforeEach,it,expect} from 'jasmine';

describe('AddTheaterComponent', () => {
  let component: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
