import { TestBed } from '@angular/core/testing';

import { Path02Service } from './path02.service';

describe('Path02Service', () => {
  let service: Path02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Path02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
