import { TestBed } from '@angular/core/testing';

import { AppReloadService } from './app-reload.service';

describe('AppReloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppReloadService = TestBed.get(AppReloadService);
    expect(service).toBeTruthy();
  });
});
