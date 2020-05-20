import { helper } from '@ember/component/helper';
import readableFileSizeUtil from 'ember-skeleton/utils/readable-file-size';

export function readableFileSize([numberOfBytes]) {
  return readableFileSizeUtil(numberOfBytes);
}

export default helper(readableFileSize);

