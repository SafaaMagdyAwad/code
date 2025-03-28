////validation Start
//validation rules
// userName is required
export  function UserNameValid() {
    if (uname.value.trim() == '') {
        nameS.innerText = " User Name is required";
        nameS.style.color = "red";
    }

    return !uname.value.trim() == '';

}
// email is required , must contain @ , end with .com
export  function EmailValid() {
    let email = uemail.value.trim();
    if (email == '') {
        emailS.innerText = "  Email is required";
        emailS.style.color = "red";
        return false;
    } else if (email.indexOf("@") == -1) {
        emailS.innerText = "  Email must contain @";
        emailS.style.color = "red";
        return false;
    }else{
        return true;
    }

}
//phone must be number
export  function phoneValid() {
    if(isNaN(parseInt(phone.value))){
        phoneS.innerText="Phone must be  anumber";
        phoneS.style.color="red";
    }
    return !isNaN(parseInt(phone.value));
}
////////////validation End
