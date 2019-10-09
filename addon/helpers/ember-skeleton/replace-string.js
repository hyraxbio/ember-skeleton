import { helper } from '@ember/component/helper';

export function replaceString(params, hash) {
  var string = params[0];
  var simpleFind = params[1];
  var simpleReplace = params[2];
  if (!string) { return; }
  if (typeof(string) !== 'string') { return; }
  var final;
  if (typeof(simpleFind) === 'string' && typeof(simpleReplace) === 'string') {
    final = string.replace(simpleFind, simpleReplace);
  } else if (hash.advanced) {
    hash.advanced.forEach(item => {
      if (typeof item.find === 'string') {
        item.find = [item.find];
      }
      if (item.find.indexOf(string) > -1) {
        final = item.replace;
      }
    });
  }
  if (!final) {
    if (hash.default) {
      final = hash.default;
    } else {
      final = string;
    }
  } 
  return final;
  
  
  // if (Array.isArray(find) && Array.isArray(replace)) {
  //   find.forEach((item, index) => {
  //     string = string.replace(item, replace[index]);
  //   });
  //   return string;
  // }
}

export default helper(replaceString);
