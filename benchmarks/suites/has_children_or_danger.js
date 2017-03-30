var Benchmark = require('benchmark');
var suite = new Benchmark.Suite({ name: 'hasChildrenOrDanger()' });
module.exports = suite;

var ATTRIBUTE_STUB = [
  {
     name: {
       name: 'children',
     },
  },
  {
     name: {
       name: 'className',
     },
  },
  {
     name: {
       name: 'active',
     },
  },
  {
     name: {
       name: 'title',
     },
  },
]

var find = require('array.prototype.find');
suite.add('find', function() {
  return !!find(ATTRIBUTE_STUB, function(attribute) {
    if (!attribute.name) {
      return false
    }
    return attribute.name.name === 'children' || attribute.name.name === 'dangerouslySetInnerHTML';
  });
})


suite.add('for loop', function() {
  var length = ATTRIBUTE_STUB.length
  var found = false
  for (var i = 0; i < length; i++) {
    var attribute = ATTRIBUTE_STUB[i]
    if (!attribute.name) {
      continue
    }

    if (attribute.name.name === 'children' || attribute.name.name === 'dangerouslySetInnerHTML') {
       found = true;
       break;
    }
  }

   return found;
})
