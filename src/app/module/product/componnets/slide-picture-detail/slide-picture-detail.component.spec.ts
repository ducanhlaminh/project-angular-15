import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePictureDetailComponent } from './slide-picture-detail.component';

describe('SlidePictureDetailComponent', () => {
  let component: SlidePictureDetailComponent;
  let fixture: ComponentFixture<SlidePictureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePictureDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidePictureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
