import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTicketComponent } from './emp-ticket.component';

describe('EmpTicketComponent', () => {
  let component: EmpTicketComponent;
  let fixture: ComponentFixture<EmpTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
