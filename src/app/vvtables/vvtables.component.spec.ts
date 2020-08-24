import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvtablesComponent } from './vvtables.component';

describe('VvtablesComponent', () => {
  let component: VvtablesComponent;
  let fixture: ComponentFixture<VvtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
