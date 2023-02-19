/// <reference path="../events.d.ts" />
/** @noSelfInFile */

declare namespace os {
  /** @deprecated */
  function loadAPI(path: string): boolean;
  /** @deprecated */
  function unloadAPI(path: string): void;

  // os.pullEvent types
  function pullEvent<Event extends string>(
    filter?: Event
  ): LuaMultiReturn<[Event, ...any[]]>;
  function pullEvent(filter: 'alarm'): AlarmEvent;
  function pullEvent(filter: 'char'): CharEvent;
  function pullEvent(filter: 'computer_command'): ComputerCommandEvent;
  function pullEvent(filter: 'disk'): DiskEvent;
  function pullEvent(filter: 'disk_eject'): DiskEjectEvent;
  function pullEvent(filter: 'file_transfer'): FileTransferEvent;
  function pullEvent(filter: 'http_check'): HTTPCheckEvent;
  function pullEvent(filter: 'http_failure'): HTTPFailureEvent;
  function pullEvent(filter: 'http_success'): HTTPSuccessEvent;
  function pullEvent(filter: 'key'): KeyEvent;
  function pullEvent(filter: 'key_up'): KeyUpEvent;
  function pullEvent(filter: 'modem_message'): ModemMessageEvent;
  function pullEvent(filter: 'monitor_resize'): MonitorResizeEvent;
  function pullEvent(filter: 'monitor_touch'): MonitorTouchEvent;
  function pullEvent(filter: 'monitor_click'): MouseClickEvent;
  function pullEvent(filter: 'monitor_drag'): MouseDragEvent;
  function pullEvent(filter: 'monitor_scroll'): MouseScrollEvent;
  function pullEvent(filter: 'monitor_up'): MouseUpEvent;
  function pullEvent(filter: 'paste'): ClipboardPasteEvent;
  function pullEvent(filter: 'peripheral'): PeripheralEvent;
  function pullEvent(filter: 'peripheral_detach'): PeripheralDetachEvent;
  function pullEvent(filter: 'rednet_message'): RednetMessageEvent;
  function pullEvent(filter: 'redstone'): RedstoneEvent;
  function pullEvent(filter: 'speaker_audio_empty'): SpeakerAudioEmptyEvent;
  function pullEvent(filter: 'task_complete'): TaskCompleteEvent;
  function pullEvent(filter: 'term_resize'): TermResizeEvent;
  function pullEvent(filter: 'timer'): TimerEvent;
  function pullEvent(filter: 'turtle_inventory'): TurtleInventoryEvent;
  function pullEvent(filter: 'websocket_closed'): WebsocketClosedEvent;
  function pullEvent(filter: 'websocket_failure'): WebsocketFailureEvent;
  function pullEvent(filter: 'websocket_message'): WebsocketMessageEvent;
  function pullEvent(filter: 'websocket_success'): WebsocketSuccessEvent;

  // os.pullEventRaw types
  function pullEventRaw<Event extends string>(
    filter?: Event
  ): LuaMultiReturn<[Event, ...any[]]>;
  function pullEventRaw(filter: 'alarm'): AlarmEvent;
  function pullEventRaw(filter: 'char'): CharEvent;
  function pullEventRaw(filter: 'computer_command'): ComputerCommandEvent;
  function pullEventRaw(filter: 'disk'): DiskEvent;
  function pullEventRaw(filter: 'disk_eject'): DiskEjectEvent;
  function pullEventRaw(filter: 'file_transfer'): FileTransferEvent;
  function pullEventRaw(filter: 'http_check'): HTTPCheckEvent;
  function pullEventRaw(filter: 'http_failure'): HTTPFailureEvent;
  function pullEventRaw(filter: 'http_success'): HTTPSuccessEvent;
  function pullEventRaw(filter: 'key'): KeyEvent;
  function pullEventRaw(filter: 'key_up'): KeyUpEvent;
  function pullEventRaw(filter: 'modem_message'): ModemMessageEvent;
  function pullEventRaw(filter: 'monitor_resize'): MonitorResizeEvent;
  function pullEventRaw(filter: 'monitor_touch'): MonitorTouchEvent;
  function pullEventRaw(filter: 'monitor_click'): MouseClickEvent;
  function pullEventRaw(filter: 'monitor_drag'): MouseDragEvent;
  function pullEventRaw(filter: 'monitor_scroll'): MouseScrollEvent;
  function pullEventRaw(filter: 'monitor_up'): MouseUpEvent;
  function pullEventRaw(filter: 'paste'): ClipboardPasteEvent;
  function pullEventRaw(filter: 'peripheral'): PeripheralEvent;
  function pullEventRaw(filter: 'peripheral_detach'): PeripheralDetachEvent;
  function pullEventRaw(filter: 'rednet_message'): RednetMessageEvent;
  function pullEventRaw(filter: 'redstone'): RedstoneEvent;
  function pullEventRaw(filter: 'speaker_audio_empty'): SpeakerAudioEmptyEvent;
  function pullEventRaw(filter: 'task_complete'): TaskCompleteEvent;
  function pullEventRaw(filter: 'term_resize'): TermResizeEvent;
  function pullEventRaw(filter: 'terminate'): TerminateEvent;
  function pullEventRaw(filter: 'timer'): TimerEvent;
  function pullEventRaw(filter: 'turtle_inventory'): TurtleInventoryEvent;
  function pullEventRaw(filter: 'websocket_closed'): WebsocketClosedEvent;
  function pullEventRaw(filter: 'websocket_failure'): WebsocketFailureEvent;
  function pullEventRaw(filter: 'websocket_message'): WebsocketMessageEvent;
  function pullEventRaw(filter: 'websocket_success'): WebsocketSuccessEvent;

  function sleep(time: number): void;
  function version(): string;
  function run(env: LuaTable, path: string, ...args: any[]): boolean;
  function queueEvent(name: string, ...params: any[]): void;
  /**
   * @throws If the time is below zero
   */
  function startTimer(timer: number): number;
  function cancelTimer(token: number): void;
  /**
   * @throws If the time is out of range
   */
  function setAlarm(time: number): number;
  function cancelAlarm(token: number): void;
  function shutdown(): void;
  function reboot(): void;
  function getComputerID(): number;
  function computerID(): number;
  function getComputerLabel(): string | null;
  function computerLabel(): string | null;
  function setComputerLabel(label?: string): void;
  function clock(): number;
  /**
   * @throws If an invalid locale is passed
   */
  function time(locale?: string | LuaTable): any;
  /**
   * @throws If an invalid locale is passed
   */
  function day(args?: string): number;
  /**
   * @throws If an invalid locale is passed
   */
  function epoch(args?: string): number;
  /**
   * @throws If an invalid format is passed
   */
  function date(format?: string, time?: number): any;
}
