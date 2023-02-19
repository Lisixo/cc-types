/** @noSelfInFile */

/** @noResolution */
declare module 'cc.completion' {
  function choice(
    text: string,
    choices: string[],
    add_space: boolean
  ): string[];
  function peripheral(text: string, add_space: boolean): string[];
  function side(text: string, add_space: boolean): string[];
  function settings(text: string, add_space: boolean): string[];
  function command(text: string, add_space: boolean): string[];
}
