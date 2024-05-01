require('dotenv').config();
const express = require('express');
const path = require('path');
const Container = require('./container');
const autoDDL = require('./config/autoDDL');

const app = express();

const rootDir = path.resolve(__dirname, "..");
process.env.ROOT_DIR = rootDir;

app.set('view engine', 'ejs');
app.set('views', 'public/template')

app.use(express.json());
app.use("/public", express.static('public'));  // /public 주소

autoDDL();

const c = new Container();

app.use("/images", c.getImageRouter(c.getImageMulterUtil()))
app.use("/", c.getWebRouter())

app.listen(8080, () => console.info("Server is running on port 8080"));
