//모듈
const express = require('express');
const app = express();

const PORT = 3000;

//앱 세팅
app.set("views", "./src/views" );
app.set("view engine","ejs");

const home = require("./src/routes/home")
app.use("/",home); // use -> 미들웨어를 등록한다 (routes 불러오는 정도로 )

module.exports = app;