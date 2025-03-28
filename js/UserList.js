
//userlist is stored in local storage
let userList=JSON.parse(localStorage.getItem("userList"));
// creating userDivs
//loop start
userList.forEach(user => {
    
    let container=document.getElementById("container");///the container of all users
    let userDiv=document.createElement("div");
    let userImage=document.createElement("img");
    let userRule=document.createElement("p");
    let userName=document.createElement("p");
    let userEmail=document.createElement("p");
    let userPhone=document.createElement("p");
    let userBirtDate=document.createElement("p");
    userDiv.className="userDiv";
    userImage.src=user.profPic;
    userRule.className="rule";
    // user.rule is the rule id
    if(user.rule==1){//admin
        userRule.innerText="Admin";
        userRule.style.backgroundColor="red";
    }else if(user.rule==2){//user
        userRule.innerText="User";
        userRule.style.backgroundColor="green";
    }else if(user.rule==3){//Moderator
        userRule.innerText="Moderator";
        userRule.style.backgroundColor="yellow";
    }
    userName.innerText=user.uName;
    userEmail.innerText=user.Email;
    userPhone.innerText=user.phNum;
    userBirtDate.innerText=user.bDate;
    container.appendChild(userDiv);
    userDiv.appendChild(userImage);
    userDiv.appendChild(userRule);
    userDiv.appendChild(userName);
    userDiv.appendChild(userEmail);
    userDiv.appendChild(userPhone);
    userDiv.appendChild(userBirtDate);
});


let searchElement=document.getElementById("searchInput");
let search=searchElement.value;
let searchbutton=document.getElementById("send");
searchbutton.addEventListener("click",(e)=>{
    let res=userList.filter((el)=>{
        return el.Email=search
    });
    console.log("search values",search);
});