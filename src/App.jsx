
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Find from "./pages/Find";
import Lists from "./pages/Lists";
import ReadingList from "./pages/ReadingList";
import Book from "./pages/Book";
import About from "./pages/About";

function App() {
    return (
        <HashRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/find" element={<Find />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/reading-list" element={<ReadingList />} />
                <Route path="/book" element={<Book />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
        </HashRouter>
    );
}

export default App;
