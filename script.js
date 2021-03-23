// we're getting the element ID and assigning it to the variable insert
const insert = document.getElementById('insert');

// event listener that executes everytime a key is pressed
window.addEventListener('keydown', (event) => {
   
    // add the Html code to the insert ID
    // once the event is triggered by pressing any key, show the key value,key event code, and the key code. 
    insert.innerHTML = `
    <div class="key">
            ${event.key === ' ' ? 'Space' : event.key} 
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
            ${event.code} 
            <small>event.code</small>
        </div>
    `;
});