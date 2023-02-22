/** @noSelfInFile */

declare namespace turtle {
  /**
   * @throws When limit is less than 1 or greater than 64
   */
  function craft(limit?: number): LuaMultiReturn<[true, null] | [false, string]>
  function forward(): LuaMultiReturn<[boolean, string | null]>
  function back(): LuaMultiReturn<[boolean, string | null]>
  function up(): LuaMultiReturn<[boolean, string | null]>
  function down(): LuaMultiReturn<[boolean, string | null]>
  function turtleLeft(): LuaMultiReturn<[boolean, string | null]>
  function turtleRight(): LuaMultiReturn<[boolean, string | null]>
  function dig(side?: string): LuaMultiReturn<[boolean, string | null]>
  function digUp(side?: string): LuaMultiReturn<[boolean, string | null]>
  function digDown(side?: string): LuaMultiReturn<[boolean, string | null]>
  function place(text?: string): LuaMultiReturn<[boolean, string | null]>
  function placeUp(text?: string): LuaMultiReturn<[boolean, string | null]>
  function placeDown(text?: string): LuaMultiReturn<[boolean, string | null]>
  /**
   * @throws If dropping an invalid number of items
   */
  function drop(count?: number): LuaMultiReturn<[boolean, string | null]>
  /**
   * @throws If dropping an invalid number of items
   */
  function dropUp(count?: number): LuaMultiReturn<[boolean, string | null]>
  /**
   * @throws If dropping an invalid number of items
   */
  function dropDown(count?: number): LuaMultiReturn<[boolean, string | null]>
  /**
   * @throws If the slot is out of range
   */
  function select(slot: number): boolean
  /**
   * @throws If the slot is out of range
   */
  function getItemCount(slot?: number): number
  /**
   * @throws If the slot is out of range
   */
  function getItemSpace(slot?: number): number
  function detect(): boolean
  function detectUp(): boolean
  function detectDown(): boolean
  function compare(): boolean
  function compareUp(): boolean
  function compareDown(): boolean
  function attact(side?: string): LuaMultiReturn<[boolean, string | null]>
  function attactUp(side?: string): LuaMultiReturn<[boolean, string | null]>
  function attactDown(side?: string): LuaMultiReturn<[boolean, string | null]>
  /**
   * @throws If given an invalid number of items
   */
  function suck(count?: number): LuaMultiReturn<[boolean, string | null]>
  function suckUp(count?: number): LuaMultiReturn<[boolean, string | null]>
  function suckDown(count?: number): LuaMultiReturn<[boolean, string | null]>
  function getFuelLevel(): number | "unlimited"
  /**
   * @throws If the refuel count is out of range
   */
  function refuel(count?: number): LuaMultiReturn<[true, null] | [false, string]>
  /**
   * @throws If the slot is out of range
   */
  function compareTo(slot: number): boolean
  /**
   * @throws If the slot is out of range
   * @throws If the number of items is out of range
   */
  function transferTo(slot: number, count?: number): boolean
  function getSelectedSlot(): number
  function getFuelLimit(): number | "unlimited"
  function equipLeft(): LuaMultiReturn<[true, null] | [false, string]>
  function equipRight(): LuaMultiReturn<[true, null] | [false, string]>
  function inspect(): LuaMultiReturn<[boolean, any]>
  function inspectUp(): LuaMultiReturn<[boolean, any]>
  function inspectDown(): LuaMultiReturn<[boolean, any]>
  /**
   * @throws If the slot is out of range
   */
  function getItemDetail(slot?: number, detailed?: boolean): any | null
  /**
   * @deprecated Historically this table behaved differently to the main turtle API, but this is no longer the case. You should not need to use it
   */
  const native: any
}