/// <reference path="../globals/term.d.ts" />
/** @noSelfInFile */

declare interface MonitorPeripheral extends Redirect {
  /**
   * @throws If the scale is out of range
   */
  setTextScale(scale: number): void;
  /**
   * @throws If the scale is out of range
   */
  getTextScale(): number;
}
