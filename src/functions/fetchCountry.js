import axios from "axios";
import createCountry from "./createCountry";

export const fetchCountry = async () => {
    const URI = `https://restcountries.com`;
    const endpoint = `/v2/all/`;

    try {
        const response = await axios.get(`${URI}${endpoint}`);
        createCountry(response.data);
        console.log(response.data);
        response.data.map((country) => {
            console.log(country);
        })
    } catch (err) {
        console.log(err);
    }

};