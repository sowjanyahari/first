import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailesComponent } from './customer-detailes.component';

describe('CustomerDetailesComponent', () => {
  let component: CustomerDetailesComponent;
  let fixture: ComponentFixture<CustomerDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
