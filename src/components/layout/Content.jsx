import ContentHeader from "./ContentHeader";
import CountryCard from "../CountryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (selectValue === "") {
      const fetchData = async () => {
        await axios
          .get("https://restcountries.com/v3.1/all")
          .then((response) => {
            setCountries(response.data);
          });
      };
      fetchData();
    }

    if (selectValue !== "") {
      fetchData = async () => {
        await axios
          .get(`https://restcountries.com/v3.1/region/${selectValue}`)
          .then((response) => {
            setCountries(response.data);
          });
      };
      fetchData();
    }
  }, [selectValue]);

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue !== "") {
        await axios
          .get(`https://restcountries.com/v3.1/name/${inputValue}`)
          .then((response) => {
            setCountries(response.data);
          });
      }
    };
    fetchData();
  }, [inputValue]);

  return (
    <div className="bg-lightTheme-background dark:bg-darkTheme-background h-full">
      <ContentHeader
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="flex flex-wrap justify-between desktop:gap-20 mobile:gap-12 desktop:px-20 mobile:px-12 desktop:mt-8 mobile:mt-16">
        {countries.map((country, key) => (
          <CountryCard country={country} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Content;
