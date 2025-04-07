////validation Start
//validation rules
// userName is required
export  function UserNameValid() {
    if (uname.value.trim() == '') {
        nameS.innerText = " User Name is required!";
        nameS.style.color = "red";
    } else{
        nameS.innerText = " ";
    }

    return !uname.value.trim() == '';

}
// email is required , must contain @ , end with .com
export  function EmailValid() {
    let email = uemail.value.trim();
    if (email == '') {
        emailS.innerText = "  Email is required !";
        emailS.style.color = "red";
        return false;
    } else if (email.indexOf("@") == -1) {
        emailS.innerText = "  Email must contain @ !";
        emailS.style.color = "red";
        return false;
    }else if (!email.endsWith(".com") ) {
        emailS.innerText = "  Email must end with .com !";
        emailS.style.color = "red";
        return false;
    }
    else{
        emailS.innerText = "  ";
        return true;
    }

}
//phone must be number required number
export  function phoneValid() {
    if(isNaN(parseInt(phone.value))){
        phoneS.innerText="Phone must be  a number!";
        phoneS.style.color="red";
    }else{
        
        phoneS.innerText="";
    }
    return !isNaN(parseInt(phone.value));
}

//validate Birth Date not null(required)

export  function bDateValid() {
    if(bDate.value==""){
        bDateS.innerText="Birt date is required";
        bDateS.style.color="red";
    }else{
        
        bDateS.innerText="";
    }
    return !bDate.value=="";
}
export  function pictureValid() {
    if(picture.value==""){
        pictureS.innerText="Picture is required & must be of type .jpg, .jpeg, .png";
        pictureS.style.color="red";
    }else{
        
        pictureS.innerText="";
    }
    return !picture.value=="";
}

////////////validation End
