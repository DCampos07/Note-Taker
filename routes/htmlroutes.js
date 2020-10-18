const path = require('path');

//routes for the two html pages
const htmlRoutes = app => {

  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./notes.html"))
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
  });
}

module.exports = htmlRoutes;