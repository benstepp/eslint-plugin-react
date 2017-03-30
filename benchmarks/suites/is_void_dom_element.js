var Benchmark = require('benchmark');
var suite = new Benchmark.Suite({ name: 'isVoidDomElement()' });
module.exports = suite;

var VOID_DOM_MAP = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  menuitem: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var VOID_DOM_LIST = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'menuitem',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

var has = require('has');
suite.add('has', function() {
  return has(VOID_DOM_MAP, 'br');
});

suite.add('Object.prototype.hasOwnProperty.call', function() {
  return Object.prototype.hasOwnProperty.call(VOID_DOM_MAP, 'br');
});

suite.add('Array.indexOf', function() {
  return VOID_DOM_LIST.indexOf('br') > -1;
});

suite.add('Array.prototype.indexOf.call', function() {
  return Array.prototype.indexOf.call(VOID_DOM_LIST, 'br') > -1;
});

suite.add('switch case', function() {
  switch ('br') {
    case 'area':
      return true;
    case 'base':
      return true;
    case 'br':
      return true;
    case 'col':
      return true;
    case 'embed':
      return true;
    case 'hr':
      return true;
    case 'img':
      return true;
    case 'input':
      return true;
    case 'keygen':
      return true;
    case 'link':
      return true;
    case 'menuitem':
      return true;
    case 'meta':
      return true;
    case 'param':
      return true;
    case 'source':
      return true;
    case 'track':
      return true;
    case 'wbr':
      return true;
    default:
      return false;
  }
});
