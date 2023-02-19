/** @noSelfInFile */

declare interface Inventory {
  size(): number;
  list(): any;
  /**
   * @throws If the slot is out of range
   */
  getItemDetail(slot: number): any;
  /**
   * @throws If the slot is out of range
   */
  getItemLimit(slot: number): number;
  /**
   * @throws If the peripheral to transfer to doesn't exist or isn't an inventory
   * @throws If either source or destination slot is out of range
   */
  pushItems(
    toName: string,
    fromSlot: number,
    limit?: number,
    toSlot?: number
  ): number;
  /**
   * @throws If the peripheral to transfer to doesn't exist or isn't an inventory
   * @throws If either source or destination slot is out of range
   */
  pullItems(
    fromName: string,
    fromSlot: number,
    limit?: number,
    toSlot?: number
  ): number;
}
