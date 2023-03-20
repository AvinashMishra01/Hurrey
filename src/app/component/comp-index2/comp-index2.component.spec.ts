import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIndex2Component } from '../comp-index2/comp-index2.component';

describe('CompIndex2Component', () => {
  let component: CompIndex2Component;
  let fixture: ComponentFixture<CompIndex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompIndex2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompIndex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
