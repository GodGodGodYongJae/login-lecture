"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
   home : (req,res)=>{
    res.render('home/index');
   },
  
   login : (req,res)=>{
    res.render('home/login');
   }
}


const process = {
  
   login : (req,res)=>{
    const id = req.body.id;
    const pass = req.body.pass;
    // const userStorage = new UserStorage();
    const users = UserStorage.getUsers("id","pass");
    const response = {};

    if(users.id.includes(id))
    {
      const idx = users.id.indexOf(id);
      if(users.pass[idx] === pass){
        response.success = true;
        response.msg ="로그인에 성공하였습니다";
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하셨습니다";
    return res.json(response);

   },
}


 module.exports = {
output,process
 };