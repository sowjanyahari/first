import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPriorityComponent } from './medium-priority.component';

describe('MediumPriorityComponent', () => {
  let component: MediumPriorityComponent;
  let fixture: ComponentFixture<MediumPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
