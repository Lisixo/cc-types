/** @noSelfInFile */

declare namespace paintutils {
  function parseImage(image: string): any
  function loadImage(path: string): any | null
  function drawPixel(xPos: number, yPos: number, color?: number): void
  function drawLine(startX: number, startY: number, endX: number, endY: number, color?: number): void
  function drawBox(startX: number, startY: number, endX: number, endY: number, color?: number): void
  function drawFilledBox(startX: number, startY: number, endX: number, endY: number, color?: number): void
  function drawImage(image: any, xPos: number, yPos: number): void
}