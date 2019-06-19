import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPriorityListComponent } from './low-priority-list.component';

describe('LowPriorityListComponent', () => {
  let component: LowPriorityListComponent;
  let fixture: ComponentFixture<LowPriorityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowPriorityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowPriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
