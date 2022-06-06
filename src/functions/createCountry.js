import sortCountry from "./sortCountry";
import getColors from "./getColors";

const createCountry = (fetchArr) => {
    const listItem = document.getElementById("country-list");
    const sortedArr = sortCountry(fetchArr);
    sortedArr.map((country) => {
        console.log(country.name);
        listItem.innerHTML += `
            <li>
            <img src="${country.flags.png}" alt="${country.name}">
            <p class="${getColors(country.region)}">${country.name}</p>
            <p>Has a population of ${country.population} people</p>
            </li>
            `
    })
}

export default createCountry;
