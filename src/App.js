import './App.css';
import logo from "./assets/logo.svg";
import NavBar from './Components/Navbar';
import Hero from './Components/Hero';
import Statics from './Components/Statics';
import Features from './Components/Features';
import Billing from './Components/Billing';
import CardDeal from './Components/CardDeal';
import Clients from './Components/Clients';
import Companies from './Components/Companies';
import CTA from './Components/CTA';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavBar logo={logo}/>
      <Hero/>
      <Statics/>
      <Features/>
      <Billing/>
      <CardDeal/>
      <Clients/>
      <Companies/>
      <CTA/>
      <Footer logo={logo}/>
    </>  
  );
}

export default App;
