/** @noSelfInFile */

declare namespace textutils {
  function slowWrite(text: string, rate?: number): void
  function slowPrint(text: string, rate?: number): void
  function formatTime(time: number, twentyFourHour?: boolean): string
  function pagedPrint(text: string, freeLines?: number): number
  function tabulate(...tables: number[] | Array<string>): void
  function pagedTabulate(...tables: number[] | Array<string>): void
  const empty_json_array: any
  const json_null: any
  /**
   * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
   */
  function serialize(t: any, opts: {
    compact?: boolean,
    allowRepetitions?: boolean
  }): string
  /**
   * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
   */
  function serialise(t: any, opts: {
    compact?: boolean,
    allowRepetitions?: boolean
  }): string
  function unserialize(s: string): any | null
  function unserialise(s: string): any | null
  /**
   * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
   */
  function serializeJSON(t: any, NBTStyle?: boolean): string
  /**
   * @throws If the object contains a value which cannot be serialised. This includes functions and tables which appear multiple times.
   */
  function serialiseJSON(t: any, NBTStyle?: boolean): string
  function unserializeJSON(s: string, options: {
    nbt_style?: boolean,
    parse_null?: boolean,
    parse_empty_array?: boolean
  }): LuaMultiReturn<[any | null, string | null]>
  function unserialiseJSON(s: string, options: {
    nbt_style?: boolean,
    parse_null?: boolean,
    parse_empty_array?: boolean
  }): LuaMultiReturn<[any | null, string | null]>
  function urlEncode(str: string): string
  function complete(searchText: string, searchTable?: any): string[]
}