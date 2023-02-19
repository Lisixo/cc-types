/// <reference path="./globals/fs.d.ts" />
/// <reference path="./globals/http.d.ts" />
/** @noSelfInFile */

declare type AlarmEvent = LuaMultiReturn<['alarm', number]>;
declare type CharEvent = LuaMultiReturn<['char', string]>;
declare type ComputerCommandEvent = LuaMultiReturn<
  ['computer_command', string]
>;
declare type DiskEvent = LuaMultiReturn<['disk', string]>;
declare type DiskEjectEvent = LuaMultiReturn<['disk_eject', string]>;
declare type FileTransferEvent = LuaMultiReturn<
  ['file_transfer', TransferredFiles]
>;
declare type HTTPCheckEvent = LuaMultiReturn<
  ['http_check', string, boolean, string | null]
>;
declare type HTTPFailureEvent = LuaMultiReturn<
  ['http_failure', string, string, HTTPResponse | null]
>;
declare type HTTPSuccessEvent = LuaMultiReturn<
  ['http_success', string, HTTPResponse]
>;
declare type KeyEvent = LuaMultiReturn<['key', string, boolean]>;
declare type KeyUpEvent = LuaMultiReturn<['key_up', number]>;
declare type ModemMessageEvent = LuaMultiReturn<
  ['modem_message', string, number, number, any, number | null]
>;
declare type MonitorResizeEvent = LuaMultiReturn<['monitor_resize', string]>;
declare type MonitorTouchEvent = LuaMultiReturn<
  ['monitor_touch', string, number, number]
>;
declare type MouseClickEvent = LuaMultiReturn<
  ['mouse_click', number, number, number]
>;
declare type MouseDragEvent = LuaMultiReturn<
  ['mouse_drag', number, number, number]
>;
declare type MouseScrollEvent = LuaMultiReturn<
  ['mouse_scroll', number, number, number]
>;
declare type MouseUpEvent = LuaMultiReturn<
  ['mouse_up', number, number, number]
>;
declare type ClipboardPasteEvent = LuaMultiReturn<['paste', string]>;
declare type PeripheralEvent = LuaMultiReturn<['peripheral', string]>;
declare type PeripheralDetachEvent = LuaMultiReturn<
  ['peripheral_detach', string]
>;
declare type RednetMessageEvent = LuaMultiReturn<
  ['rednet_message', number, any, string | null]
>;
declare type RedstoneEvent = LuaMultiReturn<['redstone']>;
declare type SpeakerAudioEmptyEvent = LuaMultiReturn<
  ['speaker_audio_empty', string]
>;
declare type TaskCompleteEvent = LuaMultiReturn<
  ['task_complete', number, boolean, string, ...any[]]
>;
declare type TermResizeEvent = LuaMultiReturn<['term_resize']>;
declare type TerminateEvent = LuaMultiReturn<['terminate']>;
declare type TimerEvent = LuaMultiReturn<['timer', number]>;
declare type TurtleInventoryEvent = LuaMultiReturn<['turtle_inventory']>;
declare type WebsocketClosedEvent = LuaMultiReturn<
  ['websocket_closed', string]
>;
declare type WebsocketFailureEvent = LuaMultiReturn<
  ['websocket_failure', string, string]
>;
declare type WebsocketMessageEvent = LuaMultiReturn<
  ['websocket_message', string, string, boolean]
>;
declare type WebsocketSuccessEvent = LuaMultiReturn<
  ['websocket_success', string, Websocket]
>;
