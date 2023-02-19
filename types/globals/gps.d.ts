/** @noSelfInFile */

declare namespace gps {
  let CHANNEL_GPS: number;
  function locate(
    timeout?: number,
    debug?: boolean
  ): LuaMultiReturn<[number, number, number] | [null]>;
}
