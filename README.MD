<h1>main steps of the project</h1>

<h3> user module contains </h3> <br>  a constructor.
<h3>UserRule module contains</h3>  
    <ul>
    <li>
        a constructor.
    </li>
    <li>
        a factory function  addRule that returns rule object
    </li>
    </ul>
<h4> 
    user rules are stored in an array called userRuleList that will be dispalyed in the htmlform by using DOM in <span style="color:green">AddUserRulesToForm.js</span>
</h4><br><br><hr><hr>
<p>
 validation rules are separated in
<span style="color:green"> Validation.js File.</span> validation rules <br><br><hr><hr>
        <ul>
            <li>userName is required;</li>
            <li>email is 
                <ul>
                    <li>required</li>
                    <li>contains @ </li>
                    <li>end with .com</li>
                </ul>
            </li>
            <li>phone is required number</li>
            <li>birthdate is required</li>
            <li>picture is 
                <ul>
                    <li>Reruired</li>
                    <li>only type of .jpg, .jpeg, .png</li>
                </ul>
            </li>
        </ul>
           <br><br><hr><hr>
 <span style="color:lightGreen"> if a validation rule wasnt  true the usrer will not be added.</span> <br><br><hr><hr>              

   <span style="color:lightYellow">
    index.html=====>add user form <br>
    users.html======>contains userlis
   </span><br><br><hr><hr>
<p>the created users are stored in local storage
UserList.js is used to add users(Stored in Local Storage) Using DOM. <br><br><hr><hr>
<ul>
Search.js Contains 
<li>search function</li>
<li>printUsers function</li>
</ul>
<br><br><hr><hr>
the Search is activated (Search using Email)
the code o searc is Written in Search.js and imported to UserList.js
when Search button is clicked a reset button appears .
</p>
