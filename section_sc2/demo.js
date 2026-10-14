// let a = "HII"
// let b = 'Hello, World!'
// let c = 12
// let d = `hello ${c} +> my name is sachin dagar i am a student od b.tech in gla university `
// console.log( d)
// let f = true//1
// let g = false//0
// console.log(f, g)
//big int 
// let sa = 10n
// let sb = 20e10
// console.log(sa, sb)
// console.log(10/0)
// console.log(-10/0)
// console.log(typeof null)
// console.log(typeof Infinity)
// console.log(typeof NaN)
// console.log(typeof "sachin")
// let ob = {
//     name: "sachin",
//     age: 20,
//     name: "dagar"
// }
// console.log(ob)
// console.log(ob.name)
// let intro = {
//     name: "sachin",
//     fatherName: "Hukam singh",
//     age: 20,
//     course : "B.tech",
//     year: "3rd",
//     rollNo: 2415001349,
//     section: "SC",
//     semester: "5th"
// };
// console.log(intro)
// console.log(Object.keys(intro))
// console.log(Object.values(intro))
// false undefined null 0 NaN "" => false
// true 1 "sachin" {} [] => true
// let a = 4;
// a = {
//     name: "sachin",
// }
// let c = a ;
// c.name = "dagar"
// console.log(c["name"])
// let d = {
//     First_name: "sachin",
//     Last_name: "dagar",
//     age: 20,
// }
// d["age"] = 21
// delete d.Last_name
// console.log(d)
// let a = ["sachin",34,222.34,{ name: "dagar" },[],10n]
// console.log(a)
// console.log(""==0)
// console.log(""===0)
// console.log(true+5)
// console.log(false+9)
// console.log(true+"sachin")
// console.log(false+"sachin")
// console.log(true+false)
// console.log(null+undefined)
// console.log(null+0)
// console.log(undefined+true)
// console.log(typeof (undefined+true))
//console.log(Number.isNaN(5));
// console.log("7"+6+9)
// console.log("8"-8)
// console.log("hello"-8)
// console.log("hello"+true)
// console.log("5"+true)
// console.log("hii"+null)
// console.log("hii"+undefined)
// console.log(("hii" + null) - (true + 4) + (null * undefined )+(null + 23) + 13.34)
// console.log(0.1 + 0.2)
// let s = 90;
// let sc = String(s);
// console.log(sc, typeof sc)
// let sa = "90";
// let sb = Number(sa);
// let sn2 = parseInt(sa);
// console.log(Boolean(sn2))
// console.log(Math.random()*10000)
// console.log(Math.round(4.5))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.1))
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))
// console.log(Math.abs(-5))
//  console.log("OTP",Math.floor(Math.random()*10000))
//  console.log((2+4)*(5%89)-(3+2)*23)
let sd = 0 || 6 && 7 || 0 && 9
let sc = 0 && 6
console.log(sd, sc)
let ds = sd>9?"greater":"lesser"
let  isuser = true;
let islogin = isuser? "login":"not login"


if(isuser){
    console.log("login")
}
else{
    console.log("not login")
}
