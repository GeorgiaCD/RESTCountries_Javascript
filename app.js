const fetchCountries = async () =>{
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();

    const countryList = document.createElement("ul");

    jsonData.forEach((countryData) => {
        const country = document.createElement("li");
        country.textContent = countryData.name.common;
        countryList.appendChild(country);
    });

    document.querySelector("body").appendChild(countryList);

}

fetchCountries();


