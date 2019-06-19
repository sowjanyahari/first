import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPriorityListComponent } from './medium-priority-list.component';

describe('MediumPriorityListComponent', () => {
  let component: MediumPriorityListComponent;
  let fixture: ComponentFixture<MediumPriorityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPriorityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
