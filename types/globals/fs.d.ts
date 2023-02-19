/** @noSelfInFile */

declare namespace fs {
  /**
   * @throws If the path does not exist
   */
  export function isDriveRoot(path: string): boolean;
  export function complete(
    path: string,
    location: string,
    include_files?: boolean,
    include_dirs?: boolean
  ): string[];
  export function complete(
    path: string,
    location: string,
    options: {
      include_files?: boolean;
      include_dirs?: boolean;
      include_hidden?: boolean;
    }
  ): string[];
  /**
   * @throws If the path doesn't exist
   */
  export function list(path: string): string[];
  /**
   * @throws On argument errors
   */
  export function combine(path: string, ...path_parts: string[]): string;
  export function getName(path: string): string;
  export function getDir(path: string): string;
  /**
   * @throws If the path doesn't exist
   */
  export function getSize(path: string): number;
  export function exists(path: string): boolean;
  export function isDir(path: string): boolean;
  export function isReadOnly(path: string): boolean;
  /**
   * @throws If the directory couldn't be created
   */
  export function makeDir(path: string): void;
  /**
   * @throws If the file or directory couldn't be moved
   */
  export function move(from: string, to: string): void;
  /**
   * @throws If the file or directory couldn't be copied
   */
  export function copy(from: string, to: string): void;
  /**
   * @throws If the file or directory couldn't be deleted
   */
  function _delete(path: string): void;
  /**
   * @throws If an invalid mode was specified
   */
  export function open(
    path: string,
    mode: 'r'
  ): LuaMultiReturn<[ReadHandle] | [null, string | null]>;
  /**
   * @throws If an invalid mode was specified
   */
  export function open(
    path: string,
    mode: 'w' | 'a'
  ): LuaMultiReturn<[WriteHandle] | [null, string | null]>;
  /**
   * @throws If an invalid mode was specified
   */
  export function open(
    path: string,
    mode: 'rb'
  ): LuaMultiReturn<[BinaryReadHandle] | [null, string | null]>;
  /**
   * @throws If an invalid mode was specified
   */
  export function open(
    path: string,
    mode: 'wb' | 'ab'
  ): LuaMultiReturn<[BinaryWriteHandle] | [null, string | null]>;
  /**
   * @throws If the path doesn't exist
   */
  export function getDrive(path: string): string | null;
  /**
   * @throws If the path doesn't exist
   */
  export function getFreeSpace(path: string): number | 'unlimited';
  /**
   * @throws If the path doesn't exist
   */
  export function find(path: string): string[];
  /**
   * @throws If the capacity cannot be determined
   */
  export function getCapacity(path: string): number | null;
  /**
   * @throws If the path does not exist
   */
  export function attributes(path: string): {
    size: number;
    isDir: boolean;
    isReadonly: boolean;
    created: number;
    modified: number;
  };
  export { _delete as delete };
}

declare interface BinaryReadHandle {
  read(count: number): string | null;
  read(): number | null;
  readAll(): string | null;
  readLine(withTrailing?: boolean): string | null;
  close(): void;
  seek(
    whence?: 'set' | 'cur' | 'end',
    offset?: number
  ): [number] | [null, string];
}

declare interface BinaryWriteHandle {
  write(byte: number): void;
  write(value: string): void;
  seek(
    whence?: 'set' | 'cur' | 'end',
    offset?: number
  ): [number] | [null, string];
  flush(): void;
  close(): void;
}

declare interface ReadHandle {
  read(count?: number): string | null;
  readAll(): string | null;
  readLine(withTrailing?: boolean): string | null;
  close(): void;
}

declare interface WriteHandle {
  write(value: any): void;
  writeLine(value: any): void;
  flush(): void;
  close(): void;
}

declare interface TransferredFile extends BinaryReadHandle {
  getName(): string;
}

declare interface TransferredFiles {
  getFiles(): TransferredFile[];
}
