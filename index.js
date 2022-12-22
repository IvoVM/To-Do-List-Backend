//imports
const Express = require("express");
const cors = require("cors");
const Routes = require("./routes");
const morgan = require("morgan");

//Settings
const app = Express();
const port = process.env.PORT || 3000;
//Middlewares
app.use(Express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes
app.use(Routes);

//Server
app.listen(port);
