/** @noSelfInFile */

declare namespace term {
  function nativePaletteColor(
    color: number
  ): LuaMultiReturn<[number, number, number]>;
  function nativePaletteColour(
    colour: number
  ): LuaMultiReturn<[number, number, number]>;
  function write(text: string): void;
  function scroll(y: number): void;
  function getCursorPos(): LuaMultiReturn<[number, number]>;
  function setCursorPos(x: number, y: number): void;
  function getCursorBlink(): boolean;
  function setCursorBlink(blink: boolean): void;
  function getSize(): LuaMultiReturn<[number, number]>;
  function clear(): void;
  function clearLine(): void;
  function getTextColor(): number;
  function getTextColour(): number;
  function setTextColor(color: number): void;
  function setTextColour(colour: number): void;
  function getBackgroundColor(): number;
  function getBackgroundColour(): number;
  function setBackgroundColor(color: number): void;
  function setBackgroundColour(colour: number): void;
  function isColor(): boolean;
  function isColour(): boolean;
  /**
   * @throws If the three inputs are not the same length
   */
  function blit(text: string, textColor: string, backgroundColor: string): void;
  function setPaletteColor(index: number, color: number): void;
  function setPaletteColor(
    index: number,
    r: number,
    g: number,
    b: number
  ): void;
  function setPaletteColour(index: number, color: number): void;
  function setPaletteColour(
    index: number,
    r: number,
    g: number,
    b: number
  ): void;
  function getPaletteColor(
    color: number
  ): LuaMultiReturn<[number, number, number]>;
  function getPaletteColour(
    color: number
  ): LuaMultiReturn<[number, number, number]>;
  function redirect(target: Redirect): Redirect;
  function current(): Redirect;
  function native(): Redirect;
}

declare interface Redirect {
  write(text: string): void;
  scroll(y: number): void;
  getCursorPos(): LuaMultiReturn<[number, number]>;
  setCursorPos(x: number, y: number): void;
  getCursorBlink(): boolean;
  setCursorBlink(blink: boolean): void;
  getSize(): LuaMultiReturn<[number, number]>;
  clear(): void;
  clearLine(): void;
  getTextColor(): number;
  getTextColour(): number;
  setTextColor(color: number): void;
  setTextColour(colour: number): void;
  getBackgroundColor(): number;
  getBackgroundColour(): number;
  setBackgroundColor(color: number): void;
  setBackgroundColour(colour: number): void;
  isColor(): boolean;
  isColour(): boolean;
  /**
   * @throws If the three inputs are not the same length
   */
  blit(text: string, textColor: string, backgroundColor: string): void;
  setPaletteColor(index: number, color: number): void;
  setPaletteColor(index: number, r: number, g: number, b: number): void;
  setPaletteColour(index: number, color: number): void;
  setPaletteColour(index: number, r: number, g: number, b: number): void;
  getPaletteColor(color: number): LuaMultiReturn<[number, number, number]>;
  getPaletteColour(color: number): LuaMultiReturn<[number, number, number]>;
}
