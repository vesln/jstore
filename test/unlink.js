var fs = require('fs');
var join = require('path').join;
var writeFile = fs.writeFileSync;
var readFile = fs.readFileSync;

it('unlinks the given path', function(done) {
  var file = join(__dirname, 'fixtures', 'destroy.json');
  writeFile(file);
  jstore.unlink(file, function(err) {
    assert(!err, 'unexpected error');
    assert.throws(function() { readFile(file) });
    done();
  });
});
