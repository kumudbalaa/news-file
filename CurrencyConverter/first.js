const fromamountelement = document.querySelector('.amount');
const convertedamountelement = document.querySelector('.convertedamount');
const tocurrencyelement = document.querySelector('.tocurrency');
const fromcurrencyelement = document.querySelector('.fromcurrency');
const resultelement = document.querySelector('.result');

// const countries =[
//     {code:"USD", name:"united state doller"},
//     {code:"INR", name:"indian rupee"},
           
// ];

//  showing countries from array to select tag 

const countries = [
    { name: "United States", code: "USA" },
    { name: "United Kingdom", code: "UK" },
    { name: "France", code: "FR" },
    { name: "Japan", code: "JP" },
    { name: "India", code: "IN" },
    { name: "China", code: "CN" },
    { name: "Germany", code: "DE" },
    { name: "Italy", code: "IT" },
    { name: "Canada", code: "CA" },
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "Russia", code: "RU" },
    { name: "South Korea", code: "KR" },
    { name: "Mexico", code: "MX" },
    { name: "Spain", code: "ES" },
    { name: "United Arab Emirates", code: "UAE" },
    { name: "Singapore", code: "SG" },
    { name: "Thailand", code: "TH" },
    { name: "Switzerland", code: "CH" },
    { name: "Netherlands", code: "NL" },
    { name: "Turkey", code: "TR" },
    { name: "South Africa", code: "ZA" },
    { name: "Argentina", code: "AR" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Indonesia", code: "ID" },
    { name: "Egypt", code: "EG" },
    { name: "Vietnam", code: "VN" },
    { name: "Malaysia", code: "MY" },
    { name: "Sweden", code: "SE" },
    { name: "Norway", code: "NO" },
    { name: "Denmark", code: "DK" },
    { name: "Finland", code: "FI" },
    { name: "Ireland", code: "IE" },
    { name: "New Zealand", code: "NZ" },
    { name: "Portugal", code: "PT" },
    { name: "Greece", code: "GR" },
    { name: "Poland", code: "PL" },
    { name: "Austria", code: "AT" },
    { name: "Belgium", code: "BE" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Hungary", code: "HU" },
    { name: "Colombia", code: "CO" },
    { name: "Chile", code: "CL" },
    { name: "Peru", code: "PE" },
    { name: "Qatar", code: "QA" },
    { name: "Philippines", code: "PH" },
    { name: "Israel", code: "IL" },
    { name: "Morocco", code: "MA" },
    { name: "Ukraine", code: "UA" }
];

countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textcontent = option2.textcontent = `${country.code}
    (${country.name})`;

    fromcurrencyelement.appendChild(option1);
    tocurrencyelement.appendChild(option2);
 
    // setting default value of select tag
    fromcurrencyelement.value = "USD";
    tocurrencyelement.value = "INR";
});

const getexchangerate = async () => {
    const amount = parseFloat(fromamountelement.value);
    const fromcurrency = fromcurrencyelement.value ;
    const tocurrency = tocurrencyelement.value ;

    // fetch data from api
    // const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`);
    const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
${fromcurrency}`);

    const data = await response.json();

    const conversionrate = data.rates[tocurrency];
    const convertedamount =( amount * conversionrate);

    convertedamountelement.value = convertedamount;
    resultelement.textContent =`${amount} ${fromcurrency} = ${convertedamount} ${tocurrency}`

//  console.log(data);

}

// fetching exchange rate when user input amount
fromamountelement.addEventListener('input', getexchangerate);
fromamountelement.addEventListener('change', getexchangerate);
tocurrencyelement.addEventListener('change', getexchangerate);
window.addEventListener('load', getexchangerate);



// const fromamountelement = document.querySelector('.amount');
// const convertedamountelement = document.querySelector('.convertedamount');
// const tocurrencyelement = document.querySelector('.tocurrency');
// const fromcurrencyelement = document.querySelector('.fromcurrency');
// const resultelement = document.querySelector('.result');

// // Function to fetch exchange rates
// const getExchangeRate = async () => {
//     const amount = parseFloat(fromamountelement.value);
//     const fromCurrency = fromcurrencyelement.value;
//     const toCurrency = tocurrencyelement.value;

//     try {
//         // Fetch data from the API
//         const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${fromCurrency}`);
//         const data = await response.json();

//         if (data.result === "success") {
//             const conversionRate = data.conversion_rates[toCurrency];
//             const convertedAmount = (amount * conversionRate).toFixed(2);

//             convertedamountelement.value = convertedAmount;
//             resultelement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
//         } else {
//             resultelement.textContent = "Error fetching exchange rate.";
//         }
//     } catch (error) {
//         resultelement.textContent = "API Error. Try again later.";
//         console.error("Error fetching exchange rate:", error);
//     }
// };

// // Fetch exchange rate when user input changes
// fromamountelement.addEventListener('input', getExchangeRate);
// fromcurrencyelement.addEventListener('change', getExchangeRate);
// tocurrencyelement.addEventListener('change', getExchangeRate);
// window.addEventListener('load', getExchangeRate);
