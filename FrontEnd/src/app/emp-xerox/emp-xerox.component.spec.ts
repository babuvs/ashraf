import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpXeroxComponent } from './emp-xerox.component';

describe('EmpXeroxComponent', () => {
  let component: EmpXeroxComponent;
  let fixture: ComponentFixture<EmpXeroxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpXeroxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpXeroxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
