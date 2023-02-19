/** @noSelfInFile */

/** @noResolution */
declare module 'cc.audio.dfpwm' {
  function encode(pwm: number[]): string;
  function make_encoder(): typeof encode;
  function decode(dfpwm: string): number[];
  function make_decoder(): typeof decode;
}
