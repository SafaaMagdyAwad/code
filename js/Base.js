import UserRule from "./UserRule.js";
import User from "./User.js";
import {phoneValid ,EmailValid ,UserNameValid } from "./Validation.js"
//create an instance 
// user rule is addes statically because there is only 3
let userList ;
console.log(JSON.parse(localStorage.getItem("userList"))==null);
if(JSON.parse(localStorage.getItem("userList"))==null){
    
     userList = new Array();
}else{
     userList = JSON.parse(localStorage.getItem("userList"));

}

let userRuleList = new Array();
let r1 = new UserRule(1, "Admin", new Date());
let r2 = new UserRule(2, "User", new Date());
let r3 = new UserRule(3, "Moderator", new Date());
userRuleList.push(r1.addRule());
userRuleList.push(r2.addRule());
userRuleList.push(r3.addRule());
// console.log(userRuleList);
// create dynamic part of add userafaorm

// adding rule list dynamically
let row = document.createElement("tr");
let titleCell = document.createElement("td");
titleCell.innerText = "User Rule";
let dataCell = document.createElement("td");
let selecttag = document.createElement("select");
selecttag.id = "rule";
dataCell.appendChild(selecttag);
//loop start
userRuleList.forEach((rule) => {
    let option = document.createElement("option");
    option.value = rule.id;
    option.innerText = rule.name;
    selecttag.appendChild(option);
});

row.appendChild(titleCell);
row.appendChild(dataCell)
let table = document.getElementById("addUser");
table.appendChild(row);

//end of adding rule dynamically



//input validation

let Uname = document.getElementById("uname");
let Uemail = document.getElementById("uemail");
let Phone = document.getElementById("phone");
let BDate = document.getElementById("bDate");
let Picture = document.querySelector('input[name=picture]:checked');
let Rule = document.getElementById("rule");




// take user data from a form
let btn = document.getElementById("adduser");

btn.addEventListener("click", (e) => {
    let username = Uname.value.trim();
    let email = Uemail.value.trim();
    let phone = Phone.value.trim();
    let birthDate = BDate.value.trim();
    let picture = Picture.value.trim();
    let rule = Rule.value.trim();
    if (UserNameValid() && EmailValid() && phoneValid()) {
        console.log("data are valid...... creating user");
        // creating user object    profilePic ,username,email,phone,birthdate,RoleChip
        let user=new User(picture,username,email,phone,birthDate,rule);
        //store userList in local storage
        userList.push(user);
        console.log(userList);
        let localArray=JSON.stringify(localStorage.getItem(userList));
        console.log("local arry",localArray);
        if(localArray!="null"){
            userList.push(localArray);
        }
        window.localStorage.setItem("userList",JSON.stringify(userList));
        alert("user is added successfully. ");
        // create user instance
    } else {
        alert("Your Data are inValid");
        //message for my testing
        console.log("UserNameValid==>", UserNameValid());
        console.log("EmailValid==>", EmailValid());
        console.log("phoneValid==>", phoneValid());
    }
});






/////user list 




