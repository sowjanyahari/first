import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSolutionListComponent } from './driver-solution-list.component';

describe('DriverSolutionListComponent', () => {
  let component: DriverSolutionListComponent;
  let fixture: ComponentFixture<DriverSolutionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSolutionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSolutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
