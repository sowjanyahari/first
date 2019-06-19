import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPriorityGraphComponent } from './medium-priority-graph.component';

describe('MediumPriorityGraphComponent', () => {
  let component: MediumPriorityGraphComponent;
  let fixture: ComponentFixture<MediumPriorityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPriorityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPriorityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
