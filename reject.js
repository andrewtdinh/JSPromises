var q = require('q');
var def = q.defer();

var printError = function(err){
  console.log(err)
}

def.promise.then(printError);
setTimeout(def.resolve, 300, "REJECTED!");
