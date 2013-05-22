var Closeio = require('../lib/close.io.js');

describe('Close.io API', function() {
  it('should do some stuff.', function(done) {
    this.timeout(10000);
    var closeio = new Closeio("c8f88a4e2ab104e8f766070e435f818b4a2bc07ca7882002e2e17ce2");
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