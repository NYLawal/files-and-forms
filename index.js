const firstNameInput= document.getElementById("firstname")
const lastNameInput= document.getElementById("lastname")
const otherNamesInput= document.getElementById("othernames")
const emailInput= document.getElementById("email")
const phoneInput= document.getElementById("phone")
const genderSelect= document.getElementById("gender")
const submitButton= document.getElementById("submit-btn")




submitButton.addEventListener("click", (e) => {
    e.preventDefault(); 
    const pattern = /[a-zA-Z]+/g;
    const lpattern = /[a-zA-Z]+/g;
    const emailpattern =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!pattern.test(firstNameInput.value)) alert("invalid input for firstname. Must be a letter, one or more")
    if (!lpattern.test(lastNameInput.value)) alert("invalid input for lastname. Must be a letter, one or more")
    if (!emailpattern.test(emailInput.value)) alert("invalid email")
    // if (firstNameInput.value.length < 1 || lastNameInput.value.length < 1) alert("name cannot be less than a character")
    if (phoneInput.value.length < 11 ) alert("inavlid phone number")

        const formData ={
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            otherName: otherNamesInput.value,
            email: emailInput.value,
            phoneNumber: phoneInput.value,
            gender: genderSelect.value
        }

        postInfo(formData)
})    