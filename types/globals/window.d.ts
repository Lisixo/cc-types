/// <reference path="./term.d.ts" />

/** @noSelfInFile */

declare namespace window {
  let CHANNEL_GPS: number;
  function locate(
    timeout?: number,
    debug?: boolean
  ): LuaMultiReturn<[number, number, number] | [null]>;
}

declare interface Window extends Redirect{
  /**
   * @throws If y is not between 1 and this window's height
   */
  getLine(y: number): LuaMultiReturn<[string, string, string]>
  setVisible(visible: boolean): void
  isVisible(): boolean
  redraw(): void
  restoreCursor(): void
  getPosition(): LuaMultiReturn<[number, number]>
  reposition(
    newX: number,
    newY: number,
    newWidth?: number,
    newHeight?: number,
    newParent?: any
  ): void
}