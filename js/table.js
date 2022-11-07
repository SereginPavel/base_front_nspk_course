const contactJohn = {
    firstName: 'John',
    lastName: 'Rambo',
    phoneNumber: '+7(999)999-99-99'
}

const contactAlan = {
    firstName: 'Alan',
    lastName: 'Jellybean',
    phoneNumber: '89054567854'
}

const contactJonathan = {
    firstName: 'Jonathan',
    lastName: 'Lollipop',
    phoneNumber: '89764563467'
}

function showModal(){
    Modal.init({
        header: 'Create new contact',
        submitFunction: () => {console.log('Форма отправлена')},
        content: makeCreationForm()
    });
}