"use strict";

class UserStorage{
  static #users = {
    id : ['npc','wo','k'],
    pass :['123','123','222'],
    name : ["엔피씨","우빈이","하잇"],
  };

  static getUsers(...args){
    const users = this.#users;
    const newUsers = args.reduce((newUsers, args)=>{
      // console.log(newUsers,args);
      if(users.hasOwnProperty(args)){
        newUsers[args] = users[args];
      }

      return newUsers;
    },{});
    // console.log(newUsers);
    return newUsers;
  }
  static getuserInfo(id){
    const users= this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users)
    const userInfo = usersKeys.reduce((newUser,info)=>{
      newUser[info] = users[info][idx];
      return newUser;
    },{});
    return userInfo;
  }
  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pass.push(userInfo.pass);
    return {success : true};
    // console.log(users);
  }
}
module.exports = UserStorage;