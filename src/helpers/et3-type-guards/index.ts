import is from "is";

export function isString(v: unknown): v is string {
  return is.string(v);
}
export function isNumber(v: unknown): v is number {
  return is.number(v) && !is.nan(v);
}
export function isArray(v: unknown): v is object {
  return is.array(v);
}

export function isBoolean(v: unknown): v is boolean {
  return is.boolean(v);
}

export function isNullOrUndefined(v: unknown): v is null | undefined {
  return is.null(v) || is.undefined(v);
}

export function isDefinedString(v: unknown): v is string {
  return is.defined(v) && !is.null(v) && is.string(v) && v !== "";
}
export function isDefinedNumber(v: unknown): v is number {
  return is.defined(v) && !is.null(v) && is.number(v) && v !== "";
}
export function isDefinedBoolean(v: unknown): v is boolean {
  return is.defined(v) && !is.null(v) && is.boolean(v) && v !== "";
}

export function isDefinedObject(v: unknown): v is Object {
  return (
    is.defined(v) && !is.null(v) && !is.empty(v) && is.object(v) && v !== ""
  );
}

export function isDefinedArray(v: unknown): v is Array<unknown> {
  return (
    is.defined(v) && !is.null(v) && !is.empty(v) && is.array(v) && v !== ""
  );
}
