import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPriorityComponent } from './driver-priority.component';

describe('DriverPriorityComponent', () => {
  let component: DriverPriorityComponent;
  let fixture: ComponentFixture<DriverPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
