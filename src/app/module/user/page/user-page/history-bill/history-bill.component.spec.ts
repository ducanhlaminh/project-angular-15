import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBillComponent } from './history-bill.component';

describe('HistoryBillComponent', () => {
  let component: HistoryBillComponent;
  let fixture: ComponentFixture<HistoryBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
