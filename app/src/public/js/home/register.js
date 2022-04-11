"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const confirmpass = document.querySelector("#confirm-pass");
const registerbtn = document.querySelector("button");
registerbtn.addEventListener("click",register)

function register(){
  if(!id.value) return alert("아이디를 입력해주세요.");
  if(!name.value) return alert("이름을 입력해주세요.");
  if(!pass.value) return alert("비밀번호를 입력해주세요.");
  if(!confirmpass.value) return alert("비밀번호 확인을 입력해주세요.");
  if(pass.value !== confirmpass.value) return alert("비밀번호가 일치하지 않습니다.");
  const req = {
    id : id.value,
    name : name.value,
    pass : pass.value,
  };


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