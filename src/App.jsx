import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./components/CountryPage";
import Content from "./components/layout/Content";
import Header from "./components/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/:id" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
