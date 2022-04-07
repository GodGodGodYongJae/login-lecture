"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const confirmpass = document.querySelector("#confirm-pass");
const registerbtn = document.querySelector("button");
registerbtn.addEventListener("click",register)

function register(){
  const req = {
    id : id.value,
    name : name.value,
    pass : pass.value,
    confirmpass : confirmpass.value,
  };

  console.log(req);
  fetch("/register",{
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(req)
  })
  .then((res)=> res.json())
  .then((res)=>{
    if(res.success)
    {
      location.href="/login";
    }else{
      alert(res.msg);
    }
  }).catch((err)=>{
    console.error(new Error("회원가입 중 에러발생"));
  });

}