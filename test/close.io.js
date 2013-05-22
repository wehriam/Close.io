var Closeio = require('../lib/close.io.js');
var config = require('../config.json');

describe('Close.io API', function() {
  it('should do some stuff.', function(done) {
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
});