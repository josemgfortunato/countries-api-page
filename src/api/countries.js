import axios from "axios";

export async function getCountries() {
  return await axios
    .get("https://restcountries.com/v3.1/all")
}

export async function getCountry(country) {
  return await axios 
    .get(`https://restcountries.com/v3.1/name/${country}`)
}

export async function getRegion(region) {
  return await axios 
    .get(`https://restcountries.com/v3.1/region/${region}`)
}
