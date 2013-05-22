Close.io
========

A Close.io API wrapper for Node.js. See the API documentation at http://developer.close.io/

**Installation**

```npm install close.io```

**Usage**

The module uses [medikoo/deferred](https://github.com/medikoo/deferred) promises.

Get an API key from your settings page: https://app.close.io/settings/

```

var Closeio = require('close.io');

var closeio = new Closeio("YOUR_API_KEY_HERE");

closeio.lead.create({name: "Spider Man"}).then(function(lead){
  return closeio.lead.read(lead.id);
}).then(function(lead){
  return closeio.lead.update(lead.id, {name: "Peter Parker"});
}).then(function(lead){
  return closeio.lead.delete(lead.id);
}).then(function(){ 
  return closeio.lead.search({name:"Bruce Wayne"});
}).then(function(search_results){}, function(err){
  console.log("There has been an error.");
  console.log(err);
});

```
