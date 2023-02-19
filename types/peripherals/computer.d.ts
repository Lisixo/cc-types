/** @noSelfInFile */

declare interface ComputerPeripheral {
  turnOn(): void;
  shutdown(): void;
  reboot(): void;
  getID(): number;
  isOn(): boolean;
  getLabel(): string | null;
}
