/** @noSelfInFile */

declare interface FluidStorage {
  tanks(): any[];
  /**
   * @throws If the peripheral to transfer to doesn't exist or isn't an fluid container
   */
  pushFluid(toName: string, limit?: number, fluidName?: string): number;
  /**
   * @throws If the peripheral to transfer to doesn't exist or isn't an fluid container
   */
  pullFluid(fromName: string, limit?: number, fluidName?: string): number;
}
