import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPriorityComponent } from './low-priority.component';

describe('LowPriorityComponent', () => {
  let component: LowPriorityComponent;
  let fixture: ComponentFixture<LowPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
