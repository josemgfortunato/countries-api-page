import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  return (
    <Card className="desktop:w-[19rem] mobile:w-full bg-lightTheme-elements dark:bg-darkTheme-elements text-lightTheme-color dark:text-darkTheme-color">
      <CardActionArea onClick={() => navigate(`/${country.name.common}`)}>
        <CardMedia
          className="h-48"
          component="img"
          image={country.flags.svg}
          title={country.name.common}
        />
        <CardContent>
          <div className="mb-4">
            <span className="text-2xl font-bold">{country.name.common}</span>
          </div>
          <div>
            <span className="text-base font-bold">Population: </span>
            {country.population}
          </div>
          <div>
            <span className="text-base font-bold">Region: </span>
            {country.region}
          </div>
          <div>
            <span className="text-base font-bold">Capital: </span>
            {country.capital}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
