export default function emberSkeletonHumaniseString(string) {
  if (!string) { return; }
  var charsArray = string.split('');
  charsArray[0] = charsArray[0].toUpperCase();

  return charsArray.join('').replace('_', ' ');
}