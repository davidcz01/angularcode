export class Item {
  itemId: number;
  itemName: string;
  itemCode: string;
  itemDesc: string;
  itemVal: number;

  constructor(item: Item) {
    this.itemId = item.itemId;
    this.itemName = item.itemName;
    this.itemCode = item.itemCode;
    this.itemDesc = item.itemDesc;
    this.itemVal = item.itemVal;
  }
}
