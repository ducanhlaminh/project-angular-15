import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBillsComponent } from './history-bills.component';

describe('HistoryBillsComponent', () => {
  let component: HistoryBillsComponent;
  let fixture: ComponentFixture<HistoryBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
