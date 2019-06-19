import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPriorityGraphComponent } from './low-priority-graph.component';

describe('LowPriorityGraphComponent', () => {
  let component: LowPriorityGraphComponent;
  let fixture: ComponentFixture<LowPriorityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowPriorityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowPriorityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
