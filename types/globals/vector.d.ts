/** @noSelf **/
declare namespace vector {
  function _new(
    x: number,
    y: number,
    z: number
  ): Vector

  export { _new as new }
}

declare interface Vector{
  /**
   * Adds two vectors together
   */
  add(o: Vector): Vector
  /**
   * Subtracts one vector from another
   */
  sub(o: Vector): Vector
  /**
   * Multiplies a vector by a scalar value
   */
  mul(m: number): Vector
  /**
   * Divides a vector by a scalar value
   */
  div(m: number): Vector
  /**
   * Negate a vector
   */
  unm(): Vector
  /**
   * Compute the dot product of two vectors
   */
  dot(o: Vector): Vector
  /**
   * Compute the cross product of two vectors
   */
  cross(o: Vector): Vector
  /**
   * Get the length (also referred to as magnitude) of this vector
   */
  length(): number
  /**
   * Divide this vector by its length, producing with the same direction, but of length 1
   */
  normalize(): Vector
  /**
   * Construct a vector with each dimension rounded to the nearest value
   */
  round(tolerance?: number): Vector
  /**
   * Convert this vector into a string, for pretty printing
   */
  tostring(): string
  /**
   * Check for equality between two vectors
   */
  equals(other: Vector): boolean
}