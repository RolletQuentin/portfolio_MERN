import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./utils/context/index";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PortfolioArt from "./pages/PortfolioArt";
import PortfolioInfo from "./pages/PortfolioInfo";
import Formation from "./pages/Formation";
import AboutMe from "./pages/AboutMe";

function App() {
    return (
        <Router>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route exact path="" element={<Home />} />
                    <Route path="portfolioInfo" element={<PortfolioInfo />} />
                    <Route path="portfolioArt" element={<PortfolioArt />} />
                    <Route path="formation" element={<Formation />} />
                    <Route path="aboutMe" element={<AboutMe />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    );
}

export default App;
