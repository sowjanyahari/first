import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPriorityListComponent } from './high-priority-list.component';

describe('HighPriorityListComponent', () => {
  let component: HighPriorityListComponent;
  let fixture: ComponentFixture<HighPriorityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighPriorityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighPriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
