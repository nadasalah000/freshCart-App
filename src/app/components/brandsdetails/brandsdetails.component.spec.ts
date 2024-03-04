import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsdetailsComponent } from './brandsdetails.component';

describe('BrandsdetailsComponent', () => {
  let component: BrandsdetailsComponent;
  let fixture: ComponentFixture<BrandsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrandsdetailsComponent]
    });
    fixture = TestBed.createComponent(BrandsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
