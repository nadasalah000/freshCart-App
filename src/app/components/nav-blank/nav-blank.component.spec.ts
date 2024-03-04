import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlankComponent } from './nav-blank.component';

describe('NavBlankComponent', () => {
  let component: NavBlankComponent;
  let fixture: ComponentFixture<NavBlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBlankComponent]
    });
    fixture = TestBed.createComponent(NavBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
