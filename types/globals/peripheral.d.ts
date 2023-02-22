/** @noSelfInFile */

declare namespace peripheral {
  interface GenericPeripheral { [key: string]: any }
  type PeripheralFilter = (name: string, wrapped: any) => boolean

  function getNames(): string[]
  function isPresent(name: string): boolean
  function getType(peripheral: string | GenericPeripheral): string | string[] | null
  function hasType(peripheral: string | GenericPeripheral, peripheralType: string): boolean | null
  function getMethods(name: string): string[] | null
  function getName(peripheral: string | GenericPeripheral): string
  function call(name: string, method: string, ...args: any[]): any
  function wrap(name: string): GenericPeripheral | null
  function find(ty: string, filter: PeripheralFilter): any
}