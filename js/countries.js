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
        const h3 = document.createElement("h3");
        h3.innerText = ` Country: ${country.name} `;
        div.appendChild(h3);
        const p = document.createElement("p");
        p.innerText = ` Capital: ${country.capital} `;
        div.appendChild(p);
        countriesID.appendChild(div);
    });
};