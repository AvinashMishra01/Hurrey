import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIndex3Component } from '../comp-index3/comp-index3.component';

describe('CompIndex3Component', () => {
  let component: CompIndex3Component;
  let fixture: ComponentFixture<CompIndex3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompIndex3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompIndex3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
