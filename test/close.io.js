var Closeio = require('../lib/close.io.js');
var config = require('../config.json');

describe('Close.io API', function() {
  it('should create, read, updated, delete and search for leads.', function(done) {
    this.timeout(10000);
    var closeio = new Closeio(config.api_key);
    closeio.lead.create({name: "John Wehr"}).then(function(data){
      return closeio.lead.read(data.id);
    }).then(function(data){
      return closeio.lead.update(data.id, {name: "John Wehr 2"});
    }).then(function(data){
      return closeio.lead.delete(data.id);
    }).then(function(data){ 
      return closeio.lead.search({name:"Wayne"});
    }).then(function(data){
      done();
    }, function(){
      throw Error("Could not updated leads.");
    });
  });
  it('should throw a verbose error', function(done) {
    var closeio = new Closeio(config.api_key);
    closeio.lead.create({contacts:[{emails:[{email:"test@example.com"}]}]}).then(function(data){
    }).then(function(data){
    }, function(err){
      done();
    });
  });
});