import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseCreateComponent } from './franchise-create.component';

describe('FranchiseCreateComponent', () => {
  let component: FranchiseCreateComponent;
  let fixture: ComponentFixture<FranchiseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
