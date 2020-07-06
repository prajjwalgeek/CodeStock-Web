const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const cors = require('cors');


const users = require('./routes/api/users');
const compiler = require('./routes/api/compiler');

const app = express();


// bodyparser middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//cors middleware
app.use(cors());

//DB config
const db = require("./config/keys").mongoURI;


//connect to mongoDB
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected Successfully."))
    .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use("/api/compiler", compiler);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));

