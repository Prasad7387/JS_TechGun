let data=`{
    "name" :"prasad",
    "age" :26,
    "is_student" : true,
    "passport_no" : null,

    "p_lang" :["c","c++","paython"],
    "address" :{
    "city" :"pune",
    "state" :"maharshtra",
    "pincode" :4110525356
    }
}`


let objdect = JSON.parse(data)
// console.log(objdect['p_lang'][2]);
console.log(objdect["address"]["city"]);

