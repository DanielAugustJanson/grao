import { useState } from 'react';
import './App.css';
import Navbar from './comp/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Footer from './comp/Footer';

function App() {
  const[language,setLanguage] = useState("EST")
  const [activeLink, setActiveLink] = useState('Home');
  
  const apiKey = process.env.REACT_APP_MAPS_API_KEY;
  console.log(apiKey)

  //Render website
  function render(){
    switch(activeLink){
      case "Home":
        return <Home></Home>
        break;
      case "About":
        return <About></About>
        break;
      case "Gallery":
        return <Gallery></Gallery>
        break;
      case "Contact":
        return <Contact></Contact>
        break;
      case "Order":
        return <Order></Order>
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Navbar language={language} activeLink={activeLink} setActiveLink={setActiveLink}></Navbar>
      {render()}
      <Footer></Footer>
    </div>
  );
}

export default App;
