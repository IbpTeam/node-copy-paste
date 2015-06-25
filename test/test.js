var cp = require('../index');

cp.copy('test test test', function(err, ret) {
  console.log(arguments);
});
