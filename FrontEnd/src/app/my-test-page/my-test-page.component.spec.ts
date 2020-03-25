import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestPageComponent } from './my-test-page.component';

describe('MyTestPageComponent', () => {
  let component: MyTestPageComponent;
  let fixture: ComponentFixture<MyTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
