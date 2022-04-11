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
  static #getUsers(data, isAll,args){
    const users = JSON.parse(data);
    if(isAll) return users;
    const newUsers = args.reduce((newUsers, args)=>{
      if(users.hasOwnProperty(args)){
        newUsers[args] = users[args];
      }

      return newUsers;
    },{});
    return newUsers;
  }

  static getUsers(isAll,...args){
  
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{
       return this.#getUsers(data,isAll,args);

    })
    .catch((err)=> console.error(err));    

  }
  
  static getuserInfo(id){
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{
       return this.#getUserInfo(data,id);

    })
    .catch((err)=> console.error(err));    
  }

 

  static async save(userInfo){
    const users = await this.getUsers(true);
    console.log(userInfo);
    if(users.id.includes(userInfo.id))
    {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pass.push(userInfo.pass);
    fs.writeFile("./src/databases/users.json",JSON.stringify(users));
    return {success : true};
    // 데이터 추가
    
  }
}
module.exports = UserStorage;