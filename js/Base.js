import UserRule from "./UserRule.js";
import User from "./User.js";
import {phoneValid ,EmailValid ,UserNameValid ,bDateValid ,pictureValid} from "./Validation.js"
import addUserRulesToForm from "./AddUserRulesToForm.js";
//create an instance 
// user rule is addes statically because there is only 3

let userList = JSON.parse(localStorage.getItem("userList"))||[];
let userRuleList = new Array();
let r1 = new UserRule(1, "Admin", new Date());
let r2 = new UserRule(2, "User", new Date());
let r3 = new UserRule(3, "Moderator", new Date());

userRuleList.push(r1.addRule());
userRuleList.push(r2.addRule());
userRuleList.push(r3.addRule());
// console.log(userRuleList);
// create dynamic part of add userafaorm
//store userRuleList in Local Storage
localStorage.setItem("userRuleList",JSON.stringify(userRuleList));

// adding userRules to the html form 
addUserRulesToForm();


//input validation

let Uname = document.getElementById("uname");
let Uemail = document.getElementById("uemail");
let Phone = document.getElementById("phone");
let BDate = document.getElementById("bDate");
let Picture = document.getElementById("picture");
let Rule = document.getElementById("rule");


// take user data from a form
let btn = document.getElementById("adduser");

btn.addEventListener("click", (e) => {
    console.log(Picture==null);
    let username = Uname.value.trim();
    let email = Uemail.value.trim();
    let phone = Phone.value.trim();
    let birthDate = BDate.value.trim();
    let rule = Rule.value.trim();
    let picture = Picture.value;
    console.log("=====>",Picture.accepts);
    // console.log(picture,"picture value");//C:\fakepath\2.jpg
    let splitedString=picture.split("\\");
    let pictureName="images/"+splitedString[splitedString.length-1];
    // console.log(pictureName);
    // debugger;
    if (UserNameValid() && EmailValid() && phoneValid() &&bDateValid() && pictureValid()) {
        console.log("data are valid...... creating user");
        // creating user object    profilePic ,username,email,phone,birthdate,RoleChip
        let user=new User(pictureName,username,email,phone,birthDate,rule);
        //store userList in local storage
        userList.push(user);
       
        window.localStorage.setItem("userList",JSON.stringify(userList));
        alert("user is added successfully. ");
        // create user instance
    } else {
        alert("Your Data are inValid");
        //message for my testing
        // console.log("UserNameValid==>", UserNameValid());
        // console.log("EmailValid==>", EmailValid());
        // console.log("phoneValid==>", phoneValid());
        // console.log("birtdateValid==>", bDateValid());
        // console.log("pictureValid==>", pictureValid());
    }
});






/////user list 




