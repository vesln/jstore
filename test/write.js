var join = require('path').join;
var fs = require('fs');

var tmp = join(__dirname, 'tmp');

it('writes a file to given path', function(done) {
  var data = { foo: 'bar' };
  var path = join(tmp, 'users.json');

  jstore.write(path, data, function(err) {
    var data = JSON.parse(fs.readFileSync(path));
    assert(data.foo === 'bar', 'expected foo to match');
    done();
  });
});
