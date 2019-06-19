import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseSolutionListComponent } from './franchise-solution-list.component';

describe('FranchiseSolutionListComponent', () => {
  let component: FranchiseSolutionListComponent;
  let fixture: ComponentFixture<FranchiseSolutionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseSolutionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseSolutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
