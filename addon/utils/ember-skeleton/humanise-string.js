export default function humaniseString(string) {
  if (!string) { return; }
  var charsArray = string.split('');
  charsArray[0] = charsArray[0].toUpperCase();

  return charsArray.join('').replace('_', ' ');
}
