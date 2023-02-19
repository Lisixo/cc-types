/** @noSelfInFile */

declare namespace rednet {
  let CHANNEL_BROADCAST: number;
  let CHANNEL_REPEAT: number;
  let MAX_ID_CHANNELS: number;

  /**
   * @throws If there is no such modem with the given name
   */
  function open(modem: string): void;
  /**
   * @throws If there is no such modem with the given name
   */
  function close(modem?: string): void;
  function isClose(modem?: string): boolean;
  function send(recipient: number, message: any, protocol?: string): boolean;
  function broadcast(message: any, protocol?: string): boolean;
  function receive<M = any>(
    protocol_filter?: string,
    timeout?: number
  ): LuaMultiReturn<[number, M, string | null] | [null]>;
  /**
   * @throws If trying to register a hostname which is reserved, or currently in use
   */
  function host(protocol: string, hostname: string): void;
  function unhost(protocol: string): void;
  function lookup(
    protocol: string,
    hostname?: string
  ): number[] | number | null;
  function run(): void;
}
