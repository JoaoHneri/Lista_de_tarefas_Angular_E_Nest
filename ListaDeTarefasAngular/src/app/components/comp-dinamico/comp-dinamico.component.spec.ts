import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDinamicoComponent } from './comp-dinamico.component';

describe('CompDinamicoComponent', () => {
  let component: CompDinamicoComponent;
  let fixture: ComponentFixture<CompDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDinamicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
