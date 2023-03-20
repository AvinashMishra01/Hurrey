import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIndex4Component } from './comp-index4.component';

describe('CompIndex4Component', () => {
  let component: CompIndex4Component;
  let fixture: ComponentFixture<CompIndex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompIndex4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompIndex4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
