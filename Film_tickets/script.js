let allTotal = 0;
function buyTicket(element)
{
let mainEL = element.closest('.single-item');
let price = mainEL.querySelector('.price').innerText; 
let name = mainEL.querySelector('h3').innerText;
let quantity = mainEL.querySelector('input').value;
let totalItems = document.querySelector('.total-items');
let input = mainEL.querySelector('input');
if (parseInt(quantity) > 0)
{
    price = price.substring(1);
    price = parseInt(price);
    let total = price * parseInt(quantity);
    allTotal += total;
    totalItems.innerHTML += `<div class = "total-single-item">
                            <h3>${name}</h3>
                            <p>${price} x ${quantity} = $<span>${total}</span></p>
                            <button onclick="removeElement(this)" class="remove-item">Remove</button>
                            </div>`; 
    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    element.innerText = 'Bought';           
    element.setAttribute('disabled', 'true');    
    input.setAttribute('disabled', 'true');    
}
else
{
    alert('choose the quantity of tickets');
}
}
function removeElement(element)
{
    let mainEL = element.closest('.total-single-item');
    let name = mainEL.querySelector('h3').innerText;
    let price = mainEL.querySelector('p span').innerText;
    let foritems = document.querySelectorAll('.single-item');
    price = parseInt(price);
    allTotal -= price;
    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainEL.remove();
    foritems.forEach(function(item)
    {
    let itemName = item.querySelector('.si-content h3').innerText;
    if (itemName === name)
    {
        item.querySelector('.actions input').value = 0;
        item.querySelector('.actions input').removeAttribute('disabled');
        item.querySelector('.actions input').removeAttribute('disabled');
        item.querySelector('.actions button').removeAttribute('disabled');
        item.querySelector('.actions button').innerText = 'Buy';
    }
    }); 
}