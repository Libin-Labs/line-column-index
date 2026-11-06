import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('maps first position', () => {
  assert.deepEqual(api.offsetToLineColumn('abc', 0), { line: 1, column: 1 });
});
test('maps ordinary column', () => {
  assert.deepEqual(api.offsetToLineColumn('abc', 2), { line: 1, column: 3 });
});
test('maps after newline', () => {
  assert.deepEqual(api.offsetToLineColumn('a\nb', 2), { line: 2, column: 1 });
});
test('treats CRLF as one line break', () => {
  assert.deepEqual(api.offsetToLineColumn('a\r\nb', 3), { line: 2, column: 1 });
});
test('counts UTF-16 units', () => {
  assert.deepEqual(api.offsetToLineColumn('😀x', 2), { line: 1, column: 3 });
});
test('rejects offset past end', () => {
  assert.throws(() => api.offsetToLineColumn('x', 2), RangeError);
});
