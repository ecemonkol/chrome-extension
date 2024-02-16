// chrome://extensions/
const inputEl = document.getElementById('input-el')
const buttonEl = document.getElementById('btn')
const unOrderedlistEl = document.getElementById('list');

const myLeads = []


// inputEl.addEventListener( 'input', function() {
//     console.log( inputEl.value)
// })

buttonEl.addEventListener('click', function() {

    if ( inputEl.value !== '') {
      
      myLeads.push(inputEl.value)
      inputEl.value = ''

    } else {
        alert('you have to write something')
    }

    renderItems();
})


function renderItems() {
    unOrderedlistEl.textContent = '';
    for (let i = 0; i < myLeads.length; i++) {
        const itemEl = document.createElement('li');
        const anchorEl = document.createElement('a');
        anchorEl.textContent = myLeads[i];
        anchorEl.href = myLeads[i]; 
        anchorEl.target = "_blank"; 
        itemEl.appendChild(anchorEl);
        unOrderedlistEl.appendChild(itemEl); 
    }
}
