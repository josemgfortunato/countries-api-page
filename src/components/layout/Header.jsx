import { Box, IconButton } from "@mui/material";
import { BsMoon } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Box className="bg-lightTheme-elements text-lightTheme-color dark:text-darkTheme-color dark:bg-darkTheme-elements h-24 desktop:px-20 mobile:px-4 flex items-center justify-between">
      <span className="font-bold desktop:text-2xl">Where in the world?</span>
      <div className="flex gap-2 items-center">
        <IconButton size="medium" onClick={() => themeToggler()}>
          {theme === "light" ? (
            <BsMoon className="text-lightTheme-color dark:text-darkTheme-color text-xl" />
          ) : (
            <MdOutlineLightMode className="text-lightTheme-color dark:text-darkTheme-color text-xl" />
          )}
        </IconButton>
        <span className="font-bold desktop:text-lg">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </Box>
  );
};

export default Header;
