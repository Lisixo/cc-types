/** @noSelfInFile */

declare interface PrinterPeripheral {
  /**
   * @throws If any values couldn't be converted to a string, or if no page is started
   */
  write(...text: string[]): void;
  /**
   * @throws If a page isn't being printed
   */
  getCursorPos(): LuaMultiReturn<[number, number]>;
  /**
   * @throws If a page isn't being printed
   */
  setCursorPos(x: number, y: number): void;
  /**
   * @throws If a page isn't being printed
   */
  getPageSize(): LuaMultiReturn<[number, number]>;
  newPage(): boolean;
  /**
   * @throws If a page isn't being printed
   */
  endPage(): boolean;
  /**
   * @throws If a page isn't being printed
   */
  setPageTitle(title?: string): void;
  getInkLevel(): number;
  getPaperLevel(): number;
}
