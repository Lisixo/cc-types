/** @noSelfInFile */

declare interface DrivePeripheral {
  isDiskPresent(): boolean;
  getDiskLabel(): string | null;
  /**
   * @throws If the disk's label can't be changed
   */
  setDiskLabel(label?: string): void;
  hasData(): boolean;
  getMountPath(): string | null;
  hasAudio(): boolean;
  /**
   * @returns The title of the audio, false if no disk is inserted, or null if the disk has no audio
   */
  getAudioTitle(): string | null | false;
  playAudio(): void;
  stopAudio(): void;
  ejectDisk(): void;
  /**
   * @returns The ID of the disk in the drive, or null if no disk with an ID is inserted
   */
  getDiskID(): number | null;
}
