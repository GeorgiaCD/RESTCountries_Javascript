const enter = document.querySelector("#enter");
const filterList = document.querySelector("#filter-list");
const input = document.querySelector("#countryEntry");
let countries = [];

const setUp = async () => {
    fetchData()
}

const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    countries = jsonData; 
    populateList()
}


const populateList = async () =>{

    const countryList = document.querySelector("ul");

    countries.forEach((countryData) => {
        const country = document.createElement("li");
        country.textContent = "Name: "+countryData.name.common;
        const countryPop = document.createElement("li");
        countryPop.innerText = "Population: "+ countryData.population;
        countryList.appendChild(country);
        country.appendChild(countryPop);
    });

    document.querySelector("body").appendChild(countryList);

}



setUp();
// fetchData();

const filterCountry = (country) =>{
    // grab the form
    // grab the input
    // call a filter function (substring in string:the country name)
    // reassign countries variable
    // call populate list again 
    const form = document.querySelector("form");
    const filterValue = input.value.toLowerCase();
    const filteredCountry = countries.filter()


    
}

enter.addEventListener("click",(newCountry)=>{
    filterCountry(newCountry);
})


// enter.addEventListener("click",(newCountry)=>{
//     createAndAppendListItem(newCountry);
// })




const createAndAppendListItem = (content) => {
    const filterCountry = document.createElement("li");
    filterCountry.innerText = input.value;
    filterList.appendChild(filterCountry);
}



