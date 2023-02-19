/** @noSelfInFile */

declare namespace http {
  function request(
    url: string,
    body?: string,
    headers?: { [key: string]: string },
    binary?: boolean
  ): void;

  function request(options: {
    url: string;
    body?: string;
    headers?: { [key: string]: string };
    binary?: boolean;
    method?: string;
    redirect?: boolean;
  }): void;

  function get(
    url: string,
    headers?: { [key: string]: string },
    binary?: boolean
  ): LuaMultiReturn<
    [HTTPResponse, null, null] | [null, string, HTTPResponse | null]
  >;

  function get(options: {
    url: string;
    headers?: { [key: string]: string };
    binary?: boolean;
    method?: string;
    redirect?: boolean;
  }): LuaMultiReturn<
    [HTTPResponse, null, null] | [null, string, HTTPResponse | null]
  >;

  function post(
    url: string,
    body: string,
    headers?: { [key: string]: string },
    binary?: boolean
  ): LuaMultiReturn<
    [HTTPResponse, null, null] | [null, string, HTTPResponse | null]
  >;

  function post(options: {
    url: string;
    body?: string;
    headers?: { [key: string]: string };
    binary?: boolean;
    method?: string;
    redirect?: boolean;
  }): LuaMultiReturn<
    [HTTPResponse, null, null] | [null, string, HTTPResponse | null]
  >;

  function checkURLAsync(url: string): void;
  function checkURL(
    url: string
  ): LuaMultiReturn<[true, null] | [false, string]>;
  function websocket(
    url: string,
    headers?: { [key: string]: string }
  ): LuaMultiReturn<[Websocket | null] | [false, string]>;
  function websocketAsync(
    url: string,
    headers?: { [key: string]: string }
  ): void;
}

declare interface HTTPResponse {
  getResponseCode(): [number, string];
  getResponseHeaders(): { [key: string]: string };
}

declare interface Websocket {
  receive(timeout?: number): [string, boolean] | null;
  send(message: any, binary?: boolean): void;
  close(): void;
}
