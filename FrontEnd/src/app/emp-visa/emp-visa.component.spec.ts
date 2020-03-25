import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpVisaComponent } from './emp-visa.component';

describe('EmpVisaComponent', () => {
  let component: EmpVisaComponent;
  let fixture: ComponentFixture<EmpVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
