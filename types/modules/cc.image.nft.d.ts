/// <reference path="../globals/term.d.ts" />
/** @noSelfInFile */

/** @noResolution */
declare module 'cc.image.nft' {
  function parse(image: string): any;
  function load(path: string): LuaMultiReturn<[any]>;
  function load(path: string): LuaMultiReturn<[null, string]>;
  function draw(
    image: any,
    xPos: number,
    yPos: number,
    target?: Redirect
  ): void;
}
