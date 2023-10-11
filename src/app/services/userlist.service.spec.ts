import { TestBed } from '@angular/core/testing';

import { UserList } from './userlist.service';

describe('UserlistService', () => {
  let service: UserList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
