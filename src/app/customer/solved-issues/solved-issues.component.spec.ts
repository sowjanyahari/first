import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedIssuesComponent } from './solved-issues.component';

describe('SolvedIssuesComponent', () => {
  let component: SolvedIssuesComponent;
  let fixture: ComponentFixture<SolvedIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolvedIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvedIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
