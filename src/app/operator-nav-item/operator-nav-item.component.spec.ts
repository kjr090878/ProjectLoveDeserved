import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorNavItemComponent } from './operator-nav-item.component';

describe('OperatorNavItemComponent', () => {
  let component: OperatorNavItemComponent;
  let fixture: ComponentFixture<OperatorNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
