const btnInput = document.getElementById("btn-input")
const elInput = document.getElementById("el-input")

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

btnInput.addEventListener("click", () => {
    myLeads.push(elInput.value)
    console.log(myLeads)
})

for ( i = 0 ; i < myLeads.length ; i++ ) {
    console.log(myLeads[i])
}
