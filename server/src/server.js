// This is where our hapi server will reside
var Hapi = require("hapi");
var Glue = require("glue");
var server_config = require("./server_settings.json");

var server = new Hapi.Server();

Glue.compose(
  server_config,
  function(err, server) {
    server.start(function(err) {
      if (err) {
        throw err;
      } else {
        server.route(require("./routes"));
        console.log("Listening on ", server.info.uri);
      }
    });
  }
);
