import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAuthComponent } from './nav-auth.component';

describe('NavAuthComponent', () => {
  let component: NavAuthComponent;
  let fixture: ComponentFixture<NavAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavAuthComponent]
    });
    fixture = TestBed.createComponent(NavAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
