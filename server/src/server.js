// This is where our hapi server will reside
const Hapi = require("hapi");
// const Glue = require("glue");
// const server_config = require("./server_settings.json");
const { configureRoutes } = require("./routes");

const server = Hapi.server({
  host: "localhost",
  port: 8000
});

// Glue.compose(
//   server_config,
//   function(err, server) {
//     server.start(function(err) {
//       if (err) {
//         throw err;
//       } else {
//         server.route(require("./routes"));
//         console.log("Listening on ", server.info.uri);
//       }
//     });
//   }
// );
const main = async () => {
  await configureRoutes(server);
  await server.start();
  return server;
};

main()
  .then(server => {
    console.log("Server running at: ", server.info.uri);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
