export const prettifier = (num) => {
  let parts = num.toString().split('.');
  let integer = parts[0];
  let fraction = parts[1];
  let multiplier = '';

  if (integer.length < 7) {
    fraction = (fraction ? fraction.charAt(0) : '0');
  } else if (integer.length < 10) {
    fraction = integer.slice(integer.length - 6, integer.length - 5);
    integer = integer.slice(0, integer.length - 6);
    multiplier = 'M';
  } else if (integer.length < 13) {
    fraction = integer.slice(integer.length - 9, integer.length - 8);
    integer = integer.slice(0, integer.length - 9);
    multiplier = 'B';
  } else {
    fraction = integer.slice(integer.length - 12, integer.length - 11);
    integer = integer.slice(0, integer.length - 12);
    multiplier = 'T';
  }
  return integer + (fraction !== '0' ? ('.' + fraction) : '') + multiplier;
};