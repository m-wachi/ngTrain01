import { TestBed } from '@angular/core/testing';

import { Path01Service } from './path01.service';

describe('Path01Service', () => {
  let service: Path01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Path01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
