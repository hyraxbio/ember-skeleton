import { helper } from '@ember/component/helper';

export function replaceString(params) {
  var string = params[0];
  var find = params[1];
  var replace = params[2];
  if (!string) { return; }
  if (typeof(string) !== 'string') { return; }
  if (typeof(find) === 'string' && typeof(replace) === 'string') {
    return string.replace(find, replace);
  }
  if (Array.isArray(find) && Array.isArray(replace)) {
    find.forEach((item, index) => {
      string = string.replace(item, replace[index]);
    });
    return string;
  }
}

export default helper(replaceString);
