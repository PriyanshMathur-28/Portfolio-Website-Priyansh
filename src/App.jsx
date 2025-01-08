import './App.css';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Skill from './Components/Skills/skill';
import Qualification from './Components/Qualification/Qualification';
import Contact from './Components/Contact/contact';
import Portfolio from './Components/Portfolio/portfolio';
import Footer from './Components/Footer/footer';
import Header from "./Components/Header/header"
function App() {
    return (
        <div>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <br /><br /><br />
                <br /><br />
                <Skill />
                <Qualification />
                <Portfolio />
                <Contact />
                <Footer />
            </main>
            <br />
        </div>
    );
}

export default App;
