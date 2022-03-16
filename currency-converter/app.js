const KEY_API = "df23ce5b30113134afdf6c44";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${KEY_API}`;

async function getSupportedCodes() {
    try {
        const response = await fetch(`${BASE_URL}/codes`);
        if(response.ok) {
            const data = await response.json();
            const codes = data["supported_codes"];
            return codes;
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

const getConversionRate = async (baseCode, targetCode) => {
    try {
        const response = await fetch(`${BASE_URL}/pair/${baseCode}/${targetCode}`);
        if(response.ok) {
          const data = await response.json();
          const rate = data["conversion_rate"];
          return rate;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}

const baseInit = document.querySelector(".base-unit");
const targetRate = document.querySelector(".target-rate");

const inputBaseAmount = document.querySelector("#base-amount");
const selectBaseCode = document.querySelector("#base-code");
const inputTargetAmount = document.querySelector("#target-amount");
const selectTargetCode = document.querySelector("#target-code");

const errorMessage = document.querySelector(".error-message");

let supportedCodes = [];
let conversionRate = 0;

const updateExchangeRate = async () => {
    const baseCode = selectBaseCode.value;
    const targetCode = selectTargetCode.value;
    
    errorMessage.textContent = "Loading data...";
    conversionRate = await getConversionRate(baseCode, targetCode);
    if (conversionRate === 0) {
      errorMessage.textContent = "Cannot get conversion rate";
      return;
    }
    errorMessage.textContent = "";

    const baseName = supportedCodes.find((code) => code[0] === baseCode)[1];
    const targetName = supportedCodes.find((code) => code[0] === targetCode)[1];

    baseInit.textContent = `1 ${baseName} equals`;
    targetRate.textContent = `${conversionRate} ${targetName}`;
}

const initialize = async () => {
    // Get supported codes from the API
    errorMessage.textContent = "Loading data...";
    supportedCodes = await getSupportedCodes();
    if(!supportedCodes.length) {
        errorMessage.textContent = "No supported codes"
        return;
    }
    errorMessage.textContent = "";

    // Put options into select box
    supportedCodes.forEach((code) => {
        const baseOption = document.createElement("option");
        baseOption.value = code[0];
        baseOption.textContent = code[1];
        selectBaseCode.appendChild(baseOption);

        const targetOption = document.createElement("option");
        targetOption.value = code[0];
        targetOption.textContent = code[1];
        selectTargetCode.appendChild(targetOption);
    })

    // Set VND to USD as default
    selectBaseCode.value = "VND";
    selectTargetCode.value = "USD";
    // Update exchange rate
    await updateExchangeRate();
}

selectBaseCode.addEventListener("change", updateExchangeRate);
selectTargetCode.addEventListener("change", updateExchangeRate);
inputBaseAmount.addEventListener("input", () => {
    inputTargetAmount.value = Math.round((inputBaseAmount.value * conversionRate) * 10**6) / 10**6;
});
inputTargetAmount.addEventListener("input", () => {
    inputBaseAmount.value = Math.round((inputTargetAmount.value / conversionRate) *10**6) / 10**6;
});

initialize();