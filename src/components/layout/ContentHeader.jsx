import { Input } from "@mui/material";
import { BsSearch } from "react-icons/bs";

const ContentHeader = ({
  selectValue,
  setSelectValue,
  inputValue,
  setInputValue,
}) => {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="bg-lightTheme-background dark:bg-darkTheme-background h-32 flex desktop:flex-row mobile:flex-col desktop:justify-between desktop:items-center mt-6 desktop:px-20 mobile:px-4 mobile:gap-8">
      <Input
        disableUnderline
        value={inputValue}
        onChange={handleInputChange}
        startAdornment={
          <BsSearch
            size={20}
            className="text-lightTheme-input dark:text-darkTheme-color mx-4"
          />
        }
        placeholder="Search for a Country..."
        className="shadow-black shadow-md rounded-md desktop:w-[40rem] mobile:w-full bg-lightTheme-elements dark:bg-darkTheme-elements text-lightTheme-color dark:text-darkTheme-color p-4"
      />
      <div className="flex gap-2 items-center">
        <select
          id="region"
          className="p-4 w-52 shadow-black shadow-md rounded-md dark:bg-darkTheme-elements dark:text-darkTheme-color"
          value={selectValue}
          onChange={handleSelectChange}
        >
          {regions.map((region, key) => (
            <option key={key} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ContentHeader;
