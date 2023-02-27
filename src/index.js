module.exports = function reverse (n) {
 
  let val = n.toString().split('').reverse().join('');
    
  if (val.endsWith('-')) {
    val = '' + val;
      return parseInt(val);
  }
      return parseInt(val);
}

