 //get references to the HTML elements
const sizeSelector = document.getElementById('size-selector');
const priceDisplay = document.getElementById('price');
const purchaseButton = document.getElementById('purchase-button');


//TASK 2 - Add Event Listeners for Product Selection:
sizeSelector.addEventListener('change', (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex]; 
    //get the selected size option
    const price = selectedOption.getAttribute('data-price');
    //get price from data attribute
    const stockStatus = selectedOption.getAttribute('data-stock'); 
    //get stock status from data attribute

    //update the displayed price based on the selected size
    priceDisplay.textContent = price;


//TASK 3 - Handle Stock Availability:
if (stockStatus === 'out-of-stock') {
    purchaseButton.disabled = true; //disable the button
} else {
    purchaseButton.disabled = false; //enable the button if in stock
}
});


