import axios from "axios";

export async function getCountries() {
  return await axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);
}

export async function getCountry(countryId) {
  return await axios 
    .get(`https://restcountries.com/v3.1/name/${countryId}`)
    .then((response) => response.data);
}

export async function getRegion(region) {
  return await axios 
    .get(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => response.data);
}
