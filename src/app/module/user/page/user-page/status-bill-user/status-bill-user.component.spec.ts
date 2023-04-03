import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBillUserComponent } from './status-bill-user.component';

describe('StatusBillUserComponent', () => {
  let component: StatusBillUserComponent;
  let fixture: ComponentFixture<StatusBillUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusBillUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusBillUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
