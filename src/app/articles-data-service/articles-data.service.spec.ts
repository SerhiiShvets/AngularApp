import { TestBed } from '@angular/core/testing';

import { ArticlesDataService } from './articles-data.service';

describe('ArticlesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesDataService = TestBed.get(ArticlesDataService);
    expect(service).toBeTruthy();
  });
});
