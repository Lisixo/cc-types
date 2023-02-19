/** @noSelfInFile */

declare interface SpeakerPeripheral {
  /**
   * @throws If the instrument doesn't exist
   */
  playNote(instrument: Instruments, volume?: number, pitch?: number): boolean;
  /**
   * @throws If the sound name was invalid
   */
  playNote(name: string, volume?: number, pitch?: number): boolean;
  /**
   * @throws If the audio data is malformed
   */
  playAudio(audio: number[], volume?: number): boolean;
  stop(): void;
}

declare type Instruments =
  | 'harp'
  | 'basedrum'
  | 'snare'
  | 'hat'
  | 'bass'
  | 'flute'
  | 'bell'
  | 'guitar'
  | 'chime'
  | 'xylophone'
  | 'iron_xylophone'
  | 'cow_bell'
  | 'didgeridoo'
  | 'bit'
  | 'banjo'
  | 'pling';
