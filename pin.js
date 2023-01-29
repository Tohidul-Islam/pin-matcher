function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}


document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const generatePinField = document.getElementById('generatePinField');
    generatePinField.value = getPin();
})


function matchNumber(event) {
    const number = event.target.innerText;
    const showNumber = document.getElementById('show-number');
    const showNumberString = showNumber.value;


    if (isNaN(number)) {
        if (number === 'C') {
            showNumber.value = '';
        }
        if (number === '<') {
            const splitNumber = showNumberString.split('');
            splitNumber.pop();
            const remainingNumber = splitNumber.join('');
            showNumber.value = remainingNumber;
        }
    }
    else {
        const newNumber = showNumberString + number;
        showNumber.value = newNumber;
    }

}

document.getElementById('calculator').addEventListener('click', function (event) {
    matchNumber(event);
})

document.getElementById('submit').addEventListener('click', function () {
    const generatePinField = document.getElementById('generatePinField');
    const gereratePin = generatePinField.value;

    const myPinField = document.getElementById('show-number');
    const myPin = myPinField.value;

    const pinMatchMessage = document.getElementById('pin-match');
    const pinNotMatchMessage = document.getElementById('pin-not-match');
    const leftTry = document.getElementById('left-try');


    if (gereratePin === myPin) {
        pinMatchMessage.style.display = 'block';
        pinNotMatchMessage.style.display = 'none';
        leftTry.style.display = 'none';
    }
    else {
        pinNotMatchMessage.style.display = 'block';
        pinMatchMessage.style.display = 'none';
        leftTry.style.display = 'block';

    }
})
