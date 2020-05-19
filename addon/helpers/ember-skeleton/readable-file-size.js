import { helper } from '@ember/component/helper';
import readableFileSizeUtil from 'ember-skeleton/utils/odd-or-even';

export function readableFileSize([numberOfBytes]) {
  return readableFileSizeUtil(numberOfBytes);
}

export default helper(readableFileSize);

