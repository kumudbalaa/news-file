const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Fetch currencies and populate dropdowns
async function loadCurrencies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);

        let fromSelect = document.getElementById("fromcurrency");
        let toSelect = document.getElementById("tocurrency");

        currencies.forEach(currency => {
            let option1 = new Option(currency, currency);
            let option2 = new Option(currency, currency);
            fromSelect.add(option1);
            toSelect.add(option2);
        });

        fromSelect.value = "USD"; // Default selection
        toSelect.value = "INR";
    } catch (error) {
        alert("Failed to load currencies. Check API Key!");
    }
}

// Perform currency conversion
document.getElementById("convert").addEventListener("click", async function() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromcurrency").value;
    let toCurrency = document.getElementById("tocurrency").value;

    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`);
        const data = await response.json();
        let rate = data.conversion_rate;

        let convertedAmount = amount * rate;
        document.getElementById("convertedamount").value = convertedAmount.toFixed(2);
    } catch (error) {
        alert("Error fetching exchange rate!");
    }
});

// Load currencies on page load
window.onload = loadCurrencies;
