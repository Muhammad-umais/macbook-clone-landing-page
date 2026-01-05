import NavBar from "./componenets/NavBar.jsx";
import Hero from "./componenets/Hero.jsx";
import ProductViewer from "./componenets/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./componenets/Showcase.jsx";
import Performance from "./componenets/Performance.jsx";
import Features from "./componenets/Features.jsx";
import Highlights from "./componenets/Highlights.jsx";
import Footer from "./componenets/Footer.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}

export default App