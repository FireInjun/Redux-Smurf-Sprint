const { Smurf } = require("./models");

exports.configureRoutes = server => {
  return server.route([
    {
      method: "GET",
      path: "/smurfs",
      handler: () => {
        return Smurf.findAll();
      }
    },
    {
      method: "GET",
      path: "/smurfs/{id}",
      handler: request => {
        return Smurf.findById(request.params.id);
      }
    },
    {
      method: "POST",
      path: "/smurfs",
      handler: request => {
        const smurf = Smurf.build(request.payload.smurf);
        return smurf.save();
      }
    },
    {
      method: ["PUT", "PATCH"],
      path: "/smurfs/{id}",
      handler: async request => {
        const smurf = await Smurf.findById(request.params.id);
        smurf.update(request.payload.smurf);
        return smurf.save();
      }
    },
    {
      method: "DELETE",
      path: "/smurfs/{id}",
      handler: async request => {
        const smurf = await Smurf.findById(request.params.id);
        return smurf.destroy();
      }
    }
  ]);
};
