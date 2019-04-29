import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreDetailsComponent } from './theatre-details.component';

describe('TheatreDetailsComponent', () => {
  let component: TheatreDetailsComponent;
  let fixture: ComponentFixture<TheatreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
