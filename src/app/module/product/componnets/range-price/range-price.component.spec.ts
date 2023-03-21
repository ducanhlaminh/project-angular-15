import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePriceComponent } from './range-price.component';

describe('RangePriceComponent', () => {
  let component: RangePriceComponent;
  let fixture: ComponentFixture<RangePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
