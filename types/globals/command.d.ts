/** @noSelfInFile */

declare namespace command {
  function exec(
    command: string
  ): LuaMultiReturn<[boolean, string[], number | null]>;
  function execAsync(command: string): number;
  function list(...subcommands: string[]): string[];
  function getBlockPosition(): LuaMultiReturn<[number, number, number]>;
  function getBlockInfos(
    minX: number,
    minY: number,
    minZ: number,
    maxX: number,
    maxY: number,
    maxZ: number,
    dimension?: string
  ): any[];
  function getBlockInfo(
    x: number,
    y: number,
    z: number,
    dimension?: string
  ): any
  let native: any;
  let async: any;
}
