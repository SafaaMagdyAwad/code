import { search ,printUsers } from "./Search.js";
let userList = JSON.parse(localStorage.getItem("userList")) || [];


search();
printUsers(userList);