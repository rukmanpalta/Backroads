let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
	event.preventDefault()

	 // use FormData to get the User's name and email
	 let ourFormData = new FormData(event.target)

	 let userFirstName = ourFormData.get("firstName")
	 let userEmailAddress = ourFormData.get("emailAddress")
	 console.log(userFirstName)
	 let updateHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>
        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    

	 let updateContentContainer = document.getElementById("Main-Content")
	 updateContentContainer.innerHTML = updateHtmlContent
})