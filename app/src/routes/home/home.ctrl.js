"use strict";



const output = {
   home : (req,res)=>{
    res.render('home/index');
   },
  
   login : (req,res)=>{
    res.render('home/login');
   }
}
const users = {
  id : ['npc','wo','k'],
  pass :['123','123','222'],
}

const process = {
  
   login : (req,res)=>{
    const id = req.body.id;
    const pass = req.body.pass;
    if(users.id.includes(id))
    {
      const idx = users.id.indexOf(id);
      if(users.pass[idx] === pass){
        return res.json({
          success:true,
          msg:"로그인에 성공하였습니다."
        })
      }
    }
    return res.json({
      success:false,
      msg:"로그인에 실패하셨습니다."
    })
   },
}


 module.exports = {
output,process
 };