import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripMapViewComponent } from './trip-map-view.component';

describe('TripMapViewComponent', () => {
  let component: TripMapViewComponent;
  let fixture: ComponentFixture<TripMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
