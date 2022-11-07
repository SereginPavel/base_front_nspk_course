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

const contacts = [contactJohn, contactAlan, contactJonathan];


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.contacts_count').innerText = getContactsCount();
    document.querySelector('.tabs a').innerText = getAll();

    const tableBody = document.querySelector('table tbody');
    contacts.forEach( contact => {
        const row = createTableRow(tableBody);
        Object.values(contact).forEach( value => createTableCellWithValue(row, value));
        createTableCellWithPancil(row);
    })

});

function createTableRow(table){
    const row = document.createElement('tr');
    table.append(row);
    return row;
}

function createTableCellWithValue(row, value){
    const cell = document.createElement('td');
    cell.innerText = value;
    row.append(cell);
}

function createTableCellWithPancil(row){
    const cell = document.createElement('td');
    cell.classList.add('contacts_button_edit');
    cell.innerHTML = "<a href='../html/edit-form.html' style='background-color: none; cursor: pointer;'><img src='../img/edit.svg' alt=''>";
    row.append(cell);
}

function getContactsCount(){
    if (contacts.length == 1 ) {
        return contacts.length + ' Contact';
    } else {
        return contacts.length + ' Contacts';
    }
}

function getAll(){
    return 'All ' + contacts.length;
}

function showModal(){
    Modal.init({
        header: 'Create new contact',
        submitFunction: () => {console.log('Форма отправлена')},
        content: makeCreationForm()
    });
}