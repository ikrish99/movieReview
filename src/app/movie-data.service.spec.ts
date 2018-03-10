/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDataService]
    });
  });

  it('should ...', inject([MovieDataService], (service: MovieDataService) => {
    expect(service).toBeTruthy();
  }));
});
