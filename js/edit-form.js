const contact = {
    firstName: 'John',
    lastName: 'Rambo',
    phoneNumber: '+7(999)999-99-99',
    email: 'johnrambo@nspk.ru',
    companyTitle: 'NSPK',
    jobTitle: 'Developer'
}

console.log(contact.firstName + ' ' + contact.lastName + ', ' + contact.jobTitle)

document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector(".form-edit .row .field input[name=fname]").value = contact.firstName
    document.querySelector(".form-edit .row .field input[name=lname]").value = contact.lastName
    document.querySelector(".form-edit .row .field input[name=phone]").value = contact.phoneNumber
    document.querySelector(".form-edit .row .field input[name=email]").value = contact.email
    document.querySelector(".form-edit .row .field input[name=compN]").value = contact.companyTitle
    document.querySelector(".form-edit .row .field input[name=jobT]").value = contact.jobTitle

    const form = document.querySelector(".form-edit");
    const sendSuccessBlock = document.querySelector(".hide");
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.className ='hide'
        sendSuccessBlock.className = '';
    });
})

