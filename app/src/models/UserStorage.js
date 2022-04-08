"use strict";

const fs = require("fs").promises;

class UserStorage{
  static #getUserInfo(data,id){
    const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKeys = Object.keys(users)
      const userInfo = usersKeys.reduce((newUser,info)=>{
        newUser[info] = users[info][idx];
        return newUser;
    },{});

    return userInfo;
  }

  static getUsers(...args){
  
    const newUsers = args.reduce((newUsers, args)=>{
      if(users.hasOwnProperty(args)){
        newUsers[args] = users[args];
      }

      return newUsers;
    },{});
    return newUsers;
  }
  static getuserInfo(id){
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{
       return this.#getUserInfo(data,id);

    })
    .catch((err)=> console.error(err));    
  }

 

  static save(userInfo){

    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pass.push(userInfo.pass);
    return {success : true};
    // console.log(users);
  }
}
module.exports = UserStorage;