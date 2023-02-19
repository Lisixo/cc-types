/** @noSelfInFile */

declare interface CommandPeripheral {
  getCommand(): string;
  setCommand(command: string): void;
  runCommand(): LuaMultiReturn<[boolean, string | null]>;
}
