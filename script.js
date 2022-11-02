const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function caclulate(){
    const rate_one = amountEl_one.value;
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        rateEl.innerText = `1 ${currency_one} = ${data.rates[currency_two]} ${currency_two}` ;
        amountEl_two.value = rate_one * data.rates[currency_two];
    })
}

function swapFucntion(){
    // const temp = currencyEl_one.value;
    // currencyEl_one.value = currencyEl_two.value;
    // currencyEl_two.value = temp;
    [currencyEl_one.value,currencyEl_two.value] = [currencyEl_two.value,currencyEl_one.value]
    caclulate();
}

// Event listeners
currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', caclulate);
swap.addEventListener('click',swapFucntion)
amountEl_two.addEventListener('input', caclulate);




