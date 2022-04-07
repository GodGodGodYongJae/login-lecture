"use strict";

const UserStorage = require("./UserStorage");
class User {

  constructor(body){
    this.body = body;
  }

  login(){
    const body = this.body
    // const {id,pass} = UserStorage.getUsers("id","pass");
    const {id,pass,name} = UserStorage.getuserInfo(body.id);
console.log(id , pass , name);
    // const response = {};
    // console.log(id,pass)
  
    if(id){
      if(id === body.id && pass === body.pass)
      {
        return { success : true};
        // console.log("suscess");
      }
      return {success : false, msg : "비밀번호가 틀렸습니다."};
    }
    return {success : false, msg : "존재하지 않는 아이디입니다."};

    // return response;
  }
}

module.exports = User;