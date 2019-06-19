import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverProrityListComponent } from './driver-prority-list.component';

describe('DriverProrityListComponent', () => {
  let component: DriverProrityListComponent;
  let fixture: ComponentFixture<DriverProrityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverProrityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverProrityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
