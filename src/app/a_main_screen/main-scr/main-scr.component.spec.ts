import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScrComponent } from './main-scr.component';

describe('MainScrComponent', () => {
  let component: MainScrComponent;
  let fixture: ComponentFixture<MainScrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
