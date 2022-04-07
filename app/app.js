//모듈
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

//앱 세팅
app.set("views", "./src/views" );
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 인식이 안되는 걸 해결해줌.
app.use(bodyParser.urlencoded({extended:true}));

const home = require("./src/routes/home")
app.use("/",home); // use -> 미들웨어를 등록한다 (routes 불러오는 정도로 )

module.exports = app;