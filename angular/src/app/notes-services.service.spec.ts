import { TestBed } from '@angular/core/testing';

import { NotesServicesService } from './patient/notes-services.service';

describe('NotesServicesService', () => {
  let service: NotesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
