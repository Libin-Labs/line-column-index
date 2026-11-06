export interface LineColumn {
  readonly line: number;
  readonly column: number;
}
export function offsetToLineColumn(text: string, offset: number): LineColumn {
  if (typeof text !== 'string') throw new TypeError('Text must be a string');
  if (!Number.isSafeInteger(offset) || offset < 0 || offset > text.length)
    throw new RangeError('Offset outside text');
  let line = 1,
    column = 1;
  for (let i = 0; i < offset; i++) {
    const code = text.charCodeAt(i);
    if (code === 13) {
      if (text.charCodeAt(i + 1) === 10) i++;
      line++;
      column = 1;
    } else if (code === 10) {
      line++;
      column = 1;
    } else column++;
  }
  return { line, column };
}
