var fs = require('fs');
var path = require('path');

var suites = fs.readdirSync(path.join(__dirname, 'suites'));

suites.forEach(function(suite) {
  var bench = require('./suites/' + suite);

  bench.on('complete', function() {
    var length = this.length
    for (var i = 0; i < length; i ++) {
      console.log(this[i].toString());
    };

    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('\n');
  });

  console.log(bench.name);
  bench.run({ async: false, maxTime: 1 });
});

