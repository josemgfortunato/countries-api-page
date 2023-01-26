import { Box, Button, Chip } from "@mui/material";
import { MdKeyboardBackspace } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCountry } from "../api/countries";

const CountryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { status, error, data: country } = useQuery({ queryKey: ["country", id], queryFn: () => getCountry(id).then(res => res.data) });

  if (status === "loading") return "";
  if (error === "error") return "";

  return (
    <div className="desktop:h-screen flex flex-col bg-lightTheme-background dark:bg-darkTheme-background text-lightTheme-color dark:text-darkTheme-color desktop:p-20 mobile:p-10 gap-16">
      <div>
        <Button
          className="dark:bg-darkTheme-elements text-lightTheme-color dark:text-darkTheme-color"
          onClick={() => navigate("/")}
          startIcon={<MdKeyboardBackspace />}
          variant="outlined"
          color="inherit"
        >
          Back
        </Button>
      </div>
      <div className="flex desktop:flex-row mobile:flex-col desktop:items-center desktop:gap-32 mobile:gap-8">
        <Box
          className="desktop:w-[36rem] mobile:w-full"
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <img
            src={country[0].flags.svg}
            alt={country[0].name.common}
            className="object-cover"
          />
        </Box>
        <div className="flex flex-col gap-12">
          <div>
            <span className="text-4xl font-bold">{country[0].name.common}</span>
          </div>
          <div className="flex desktop:flex-row mobile:flex-col desktop: gap-20 mobile:gap-8">
            <div>
              <div>
                <span className="text-base font-bold">Native Name: </span>
                {Object.entries(country[0].name.nativeName).map((value) => value[1].common)}
              </div>
              <div>
                <span className="text-base font-bold">Population: </span>
                {country[0].population}
              </div>
              <div>
                <span className="text-base font-bold">Region: </span>
                {country[0].region}
              </div>
              <div>
                <span className="text-base font-bold">Sub Region: </span>
                {country[0].subregion}
              </div>
              <div>
                <span className="text-base font-bold">Capital: </span>
                {country[0].capital}
              </div>
            </div>
            <div>
              <div>
                <span className="text-base font-bold">Top Level Domain: </span>
                {country[0].tld}
              </div>
              <div>
                <span className="text-base font-bold">Currencies: </span>
                {Object.entries(country[0].currencies)
                  .map((value) => value[1].name)
                  .join(", ")}
              </div>
              <div>
                <span className="text-base font-bold">Languages: </span>
                {Object.entries(country[0].languages)
                  .map((value) => value[1])
                  .join(", ")}
              </div>
            </div>
          </div>
          <div className="flex desktop:flex-row mobile:flex-col desktop:items-center gap-4 mb-20">
            <div>
              <span className="text-lightTheme-color dark:text-darkTheme-color text-base font-bold">
                Border Countries:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {country[0].borders?.map((border, key) => (
                <Chip
                  className="text-lightTheme-color dark:text-darkTheme-color"
                  key={key}
                  label={border}
                  variant="filled"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
