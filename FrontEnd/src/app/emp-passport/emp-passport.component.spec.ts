import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPassportComponent } from './emp-passport.component';

describe('EmpPassportComponent', () => {
  let component: EmpPassportComponent;
  let fixture: ComponentFixture<EmpPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
