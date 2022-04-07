"use strict";

const id = document.querySelector("#id");
const pass = document.querySelector("#pass");
const loginbtn = document.querySelector("button");
loginbtn.addEventListener("click",login)

function login(){
  const req = {
    id : id.value,
    pass : pass.value
  };

  fetch("/login",{
    method: "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(req)
  });

}