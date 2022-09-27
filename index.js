const btnInput = document.getElementById("btn-input")
const elInput = document.getElementById("el-input")
const elUl = document.getElementById("el-ul")

let myLeads = []

btnInput.addEventListener("click", () => {
    elInput.value !== `` ? myLeads.push(elInput.value) : ``;
    elInput.value = ``;
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    for ( let i = 0 ; i < myLeads.length ; i++ ) {
    listItems += `
        <li> 
            <a target="_blank" href="http://${myLeads[i]}"> 
                ${myLeads[i]} 
            </a>
        </li>
    `;
    }
    elUl.innerHTML = listItems;
}
