
let userRuleList = JSON.parse( localStorage.getItem("userRuleList"))||[];
export default function addUserRulesToForm() {
    console.log("addUserRulesToForm",userRuleList);
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

}