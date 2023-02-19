/** @noSelfInFile */

/** @noResolution */
declare module 'cc.expect' {
  /**
   * @throws If the value is not one of the allowed types
   */
  function expect(index: number, value: any, ...expected: string[]): any;
  /**
   * @throws If the field is not one of the allowed types
   */
  function field(table: LuaTable, index: string, ...expected: string[]): any;
  /**
   * @throws If the value is outside of the allowed range
   */
  function range(
    num: number,
    min?: number, // if null or undefined then -math.huge is used
    max?: number // if null or undefined then math.huge is used
  ): number;
}
