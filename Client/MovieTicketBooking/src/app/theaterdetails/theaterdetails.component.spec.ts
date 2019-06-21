import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterdetailsComponent } from './theaterdetails.component';

describe('TheaterdetailsComponent', () => {
  let component: TheaterdetailsComponent;
  let fixture: ComponentFixture<TheaterdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
