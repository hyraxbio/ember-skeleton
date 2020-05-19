// import { getOwner } from '@ember/application';
import config from 'ember-get-config';

export default function naturalSort(a, b) {
  // const config  = getOwner(this).resolveRegistration('config:environment');
console.log(config);
  var ax = [],
    bx = [];
  a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
    ax.push([$1 || Infinity, $2 || ""]);
  });
  b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) {
    bx.push([$1 || Infinity, $2 || ""]);
  });
  while (ax.length && bx.length) {
    var an = ax.shift();
    var bn = bx.shift();
    var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
    if (nn) {
      return nn;
    }
  }
  return ax.length - bx.length;
}