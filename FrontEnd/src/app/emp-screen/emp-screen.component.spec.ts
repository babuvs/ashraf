import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpScreenComponent } from './emp-screen.component';

describe('EmpScreenComponent', () => {
  let component: EmpScreenComponent;
  let fixture: ComponentFixture<EmpScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
