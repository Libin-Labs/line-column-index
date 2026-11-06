import * as api from '@lp-labs/line-column-index';
import { offsetToLineColumn } from '@lp-labs/line-column-index';
console.log(offsetToLineColumn('a\nb', 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.offsetToLineColumn('text', 'two');
