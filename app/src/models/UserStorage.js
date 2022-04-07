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
}
module.exports = UserStorage;