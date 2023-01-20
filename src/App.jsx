import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="bg-lightTheme-background dark:bg-darkTheme-background w-screen min-h-screen flex flex-col pb-16">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/:id" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
