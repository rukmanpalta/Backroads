let myLeads = []
let oldLeads = [] 
// refactoring the code by taking 2 arrays, so if in future you want to pass another
// array and display it in list, you can use another array as an argument!!
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
// localStorage.clear()
let leadsFromeLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromeLocalStorage){
	myLeads = leadsFromeLocalStorage
	render(myLeads)
}

function render(leads){
	let listItems = ""
for(let i = 0; i < leads.length; i++) {

	// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" This method
	// OR the one after 2 lines. 
	
	// DOM manipulation comes with cost; so avoid doing .innerHTML
	// INSIDE THE FOR LOOP INSTEAD DO IT ONCE OUTSIDE THE LOOP

	// const li = document.createElement("li")
	// li.textContent = myLeads[i]
	// ulEl.append(li)

// OR THE BELOW METHOD----
	// listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

	// But instead use template strings to avoid confusion of signle and
	 // double quotes.

	 listItems += `
	 	<li>
		 	<a target='_blank' href='${leads[i]}'>
		 	${leads[i]}
		 	</a>
	 	</li>
	 `
	console.log(listItems)
}

ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
	console.log(localStorage.getItem(myLeads))
})


tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url) 
        // Above is an example of Objects in array
        // const tabs = [ {url: "www.google.com"} ] key:value pair in an array i.e objects in array!!
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

deleteBtn.addEventListener("click", function(){
	localStorage.clear()
    myLeads = []
    render(myLeads)
})


