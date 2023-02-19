/** @noSelfInFile */

declare namespace colors {
  const white: 0x1;
  const orange: 0x2;
  const magenta: 0x4;
  const lightBlue: 0x8;
  const yellow: 0x10;
  const lime: 0x20;
  const pink: 0x40;
  const gray: 0x80;
  const lightGray: 0x100;
  const cyan: 0x200;
  const purple: 0x400;
  const blue: 0x800;
  const brown: 0x1000;
  const green: 0x2000;
  const red: 0x4000;
  const black: 0x8000;

  function combine(...colors: number[]): number;
  function subtract(from: number, ...to: number[]): number;
  function test(colors: number, color: number): boolean;
  function packRGB(r: number, g: number, b: number): number;
  function unpackRGB(rgb: number): [number, number, number];
  /**
   * @deprecated Use packRGB/unpackRGB instead
   */
  function rgb8(r: number, g: number, b: number): number;
  /**
   * @deprecated Use packRGB/unpackRGB instead
   */
  function rgb8(rgb: number): [number, number, number];
  function toBlit(color: number): string;
}
