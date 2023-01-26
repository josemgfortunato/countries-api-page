import ContentHeader from "./ContentHeader";
import CountryCard from "../CountryCard";
import { useEffect, useState } from "react";
import { getCountries, getCountry, getRegion } from "../../api/countries";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (selectValue === "") {
      getCountries().then((res) => setCountries(res.data));
    }

    if (selectValue !== "") {
      getRegion(selectValue).then((res) => setCountries(res.data));
    }
  }, [selectValue]);

  useEffect(() => {
    if (inputValue !== "") {
      getCountry(inputValue).then((res) => setCountries(res.data));
    }
  }, [inputValue]);

  return (
    <div className="flex justify-center bg-lightTheme-background dark:bg-darkTheme-background">
      <div className="h-full desktop:pb-20 mobile:pb-12">
        <ContentHeader
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className="flex justify-center">
          <div className="grid desktop:grid-cols-4 lg:grid-cols-5 desktop:gap-20 mobile:gap-12 desktop:px-20 mobile:px-12 desktop:mt-8 mobile:mt-16">
            {countries.map((country, key) => (
              <CountryCard country={country} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
