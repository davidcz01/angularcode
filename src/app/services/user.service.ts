import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getItems() {
    return [
      {
        itemId: 1,
        itemName: 'Test 1',
        itemCode: 'TST-001',
        itemDesc: 'Example 1',
        itemVal: 12.0,
      },
      {
        itemId: 2,
        itemName: 'Test 2',
        itemCode: 'TST-002',
        itemDesc: 'Example 2',
        itemVal: 6.0,
      },
    ];
  }
}
