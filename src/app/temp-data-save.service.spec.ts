import { TestBed } from '@angular/core/testing';

import { TempDataSaveService } from './temp-data-save.service';

describe('TempDataSaveService', () => {
  let service: TempDataSaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempDataSaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
