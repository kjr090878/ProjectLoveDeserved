import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorNavComponent } from './operator-nav.component';

describe('OperatorNavComponent', () => {
  let component: OperatorNavComponent;
  let fixture: ComponentFixture<OperatorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
