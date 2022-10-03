const btnInput = document.getElementById("btn-input")
const btnInputTab = document.getElementById("btn-input-tab")
const btnInputDelete = document.getElementById("btn-input-delete")
const elInput = document.getElementById("el-input")
const elUl = document.getElementById("el-ul")

let myLeads = []


checkLeadsInLocalStorage()
render(myLeads)

function checkLeadsInLocalStorage() {
    const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
    leadsFromLocalStorage ? myLeads = leadsFromLocalStorage : console.log( `Local Storage Is Currently Empty.` );
}

btnInput.addEventListener("click", () => {
    if (elInput.value !== ``) {
        myLeads.push(elInput.value);
        elInput.value = ``;
        localStorage.setItem( "myLeads", JSON.stringify(myLeads) );
    }
    render(myLeads);
})

btnInputTab.addEventListener("click", () => {
    console.log("Saved tab")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem( "myLeads", JSON.stringify(myLeads) );
        render(myLeads)
    })
})

btnInputDelete.addEventListener("dblclick", () => {
    console.log("Deleted all leads")
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

function render(leads) {
    let listItems = "";
    for ( let i = 0 ; i < leads.length ; i++ ) {
    listItems += `
        <li> 
            <a target="_blank" href="http://${leads[i]}"> 
                ${leads[i]} 
            </a>
        </li>
    `;
    }
    elUl.innerHTML = listItems;
}