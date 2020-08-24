import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtutilComponent } from './jwtutil.component';

describe('JwtutilComponent', () => {
  let component: JwtutilComponent;
  let fixture: ComponentFixture<JwtutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
