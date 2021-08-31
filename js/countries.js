const loadCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
};
loadCountries();

const displayCountries = countries => {
    // console.log(country);

    const countriesID = document.getElementById("countries");
    /* for (const country of countries) {
        console.log(country);
        console.log(country.name);
    } */
    countries.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("country");
        /* const h3 = document.createElement("h3");
        h3.innerText = ` Country: ${country.name} `;
        div.appendChild(h3);
        const p = document.createElement("p");
        p.innerText = ` Capital: ${country.capital} `;
        div.appendChild(p); */
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesID.appendChild(div);
    });
};

const loadCountryByName = countryDetails => {
    const url = `https://restcountries.eu/rest/v2/name/${countryDetails}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
};

const displayCountryDetails = country => {
    // console.log(country);
    const countryDiv = document.getElementById("country-details");
    countryDiv.innerHTML = `
        <h5>Name: ${country.name}</h5>
        <p>Population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `;
};