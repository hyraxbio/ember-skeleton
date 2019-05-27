import { helper } from '@ember/component/helper';
import readableFileSizeUtil from 'ember-skeleton/utils/ember-skeleton/readable-file-size';

export function readableFileSize(params) {
  return readableFileSizeUtil(params[0]);
}

export default helper(readableFileSize);