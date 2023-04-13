import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import App from "./App";

function Index(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/App" element={<App />} />
                <Route path="/AboutUs" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index;