const country = document.getElementById("country");
const countryResult = document.getElementById("countryResult");
let lastSelectedIndex = -1;

country.addEventListener("change", function() {
    if (lastSelectedIndex === country.selectedIndex) {
        setTimeout(() => {
            country.selectedIndex = 0; // Default ပြန်သွားမယ်
            countryResult.innerText = ""; // Text ကိုဖျောက်မယ်
            lastSelectedIndex = -1;
        }, 10); // Delay နည်းနည်း ထားပြီး Reset
    } else {
        countryResult.innerText = "Selected Country : " + country.options[country.selectedIndex].text;
        lastSelectedIndex = country.selectedIndex;
    }
});
