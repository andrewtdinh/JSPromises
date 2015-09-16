var q = require('q');
var defer = q.defer();
defer.promise = {then: function(str){
  setTimeout(console.log, 300, str)
}};

defer.promise.then('RESOLVED!')
