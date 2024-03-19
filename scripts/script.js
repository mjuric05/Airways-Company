document.addEventListener('DOMContentLoaded', function () {
    createCounter('counter1', 'result1', 0);    
    createCounter('counter2', 'result2', 1);
    createCounter('counter3', 'result3', 0);
    createCounter('counter4', 'result4', 1);
    createCounter('counter5', 'result5', 2);
    createCounter('counter6', 'result6', 3);

    updateGrandTotal();
});

function createCounter(counterId, resultId, constantIndex) {
    const constants = [200, 20, 250, 25]; 

    const counterContainer = document.getElementById(counterId);
    const decrementButton = counterContainer.querySelector('.decrement');
    const incrementButton = counterContainer.querySelector('.increment');
    const countElement = counterContainer.querySelector('.count');

    const resultContainer = document.getElementById(resultId);

    let count = 0;

    function updateResult() {
        const result = count * constants[constantIndex];
        resultContainer.querySelector('.value').textContent = 'Total price: ' + result + '$';
        updateGrandTotal();
    }

    decrementButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCountAndResult();
        }
    });

    incrementButton.addEventListener('click', function () {
        count++;
        updateCountAndResult();
    });

    function updateCountAndResult() {
        countElement.textContent = count;
        updateResult();
    }
}

function updateGrandTotal() {
    const results = document.querySelectorAll('.result-container');
    let total = 0;

    results.forEach(resultContainer => {
        const valueText = resultContainer.querySelector('.value').textContent;
        const result = parseInt(valueText.split(':')[1].trim());
        total += isNaN(result) ? 0 : result;
    });

    const totalPriceOfTrip = document.querySelector('.totalPriceOfTrip');
    totalPriceOfTrip.textContent = total + '$';
}

document.querySelector('.payment').addEventListener('click', function () {
    location.reload();
});