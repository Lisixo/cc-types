/** @noSelfInFile */

/** @noResolution */
declare module 'cc.strings' {
  function wrap(
    text: string,
    width?: number
  ): string[]
  function ensure_width(
    line: string,
    width?: number
  ): string
}