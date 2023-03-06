import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider, ThemeProvider } from "./utils/context/index";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PortfolioArt from "./pages/PortfolioArt";
import PortfolioInfo from "./pages/PortfolioInfo";
import Formation from "./pages/Formation";
import AboutMe from "./pages/AboutMe";
import Admin from "./pages/Admin";
import ProjectInfo from "./pages/ProjectInfo";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <ThemeProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route exact path="" element={<Home />} />
                        <Route
                            path="portfolioInfo"
                            element={<PortfolioInfo />}
                        />
                        <Route
                            path="portfolioInfo/:id"
                            element={<ProjectInfo />}
                        />
                        <Route path="portfolioArt" element={<PortfolioArt />} />
                        <Route path="formation" element={<Formation />} />
                        <Route path="aboutMe" element={<AboutMe />} />
                        <Route path="admin" element={<Admin />} />
                    </Routes>
                    <Footer />
                </ThemeProvider>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
