//requiring express
const express = required("express");
const express = required("cfonts");
//express server required
const app = express();
//port required later in code
const PORT = process.env.PORT || 7000;
//express data parsing
app.use(express.urlcoded({
    extented:true
}));
app.use(express.json());
app.use(express.static("public"));

//routes
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

//listerner
app.listen(PORT, () => {
    console.log("hello");
});

cfonts.say("Hello World", {
    font: "chrome",
    aling: "center",
    colors: ["green", "magenta", "blue"],
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: "0",
    gradient: true,
    independentGradient: false,
    transitionGradient: false,
    env: "node",
  });

