import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPriorityGraphComponent } from './high-priority-graph.component';

describe('HighPriorityGraphComponent', () => {
  let component: HighPriorityGraphComponent;
  let fixture: ComponentFixture<HighPriorityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighPriorityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighPriorityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
