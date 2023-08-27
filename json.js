const user ={id:1, name:'salaman', job:'actor'};
// JavaScript object notation (JSON)
const stringified= JSON.stringify(user);

console.log(user)
console.log(stringified)

/*
{ id: 1, name: 'salaman', job: 'actor' }
{"id":1,"name":"salaman","job":"actor"}

*/ 


const shop ={
    owner:'alia',
    address:{
       street: 'kochukhet voot er goli',
       city:'ranbir',
       country:'BD'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 450000,
    isOpen:true,
    isNew:false
}
console.log(shop)
const shopJson=JSON.stringify(shop) //string e rupantor korbe
console.log(shopJson)

const shopObj = JSON.parse(shopJson); //object e rupantor kore
console.log(shopObj)