/** @noSelfInFile */

declare interface ModemPeripheral {
  /**
   * @throws If the channel is out of range
   * @throws If there are too many open channels
   */
  open(channel: number): void;
  /**
   * @throws If the channel is out of range
   */
  isOpen(channel: number): boolean;
  /**
   * @throws If the channel is out of range
   */
  close(channel: number): void;
  closeAll(): void;
  /**
   * @throws If the channel is out of range
   */
  transmit(channel: number, replyChannel: number, payload: any): void;
  isWireless(): boolean;
  getNamesRemote(): string[];
  isPresentRemote(name: string): boolean;
  getTypeRemote(name: string): string | null;
  hasTypeRemote(name: string, type: string): boolean | null;
  getMethodsRemote(name: string): string[] | null;
  callRemote(remoteName: string, method: string, ...args: any[]): string;
  getNameLocal(): string | null;
}
