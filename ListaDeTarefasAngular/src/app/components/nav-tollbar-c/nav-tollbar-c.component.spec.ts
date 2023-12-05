import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTollbarCComponent } from './nav-tollbar-c.component';

describe('NavTollbarCComponent', () => {
  let component: NavTollbarCComponent;
  let fixture: ComponentFixture<NavTollbarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTollbarCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTollbarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
