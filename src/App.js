import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './comp/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Footer from './comp/Footer';
import LangSwitcher from './comp/LangSwitcher';



function App() {
  const[language,setLanguage] = useState("EST")
  const [activeLink, setActiveLink] = useState('Home');
  
  //onsole.log(process.env.REACT_APP_TEMPLATE_ID)

  /* For Testing
  useEffect(()=>{
    console.log(language)
  },[language])
  */

  useEffect(() => {
    // Update the document title when activeLink changes
    document.title = `GraO - ${activeLink}`;
  }, [activeLink]);

  //Render website
  function render(){
    switch(activeLink){
      case "Home":
        return <Home language={language} setActiveLink={setActiveLink}></Home>
      case "About":
        return <About language={language}></About>
      case "Gallery":
        return <Gallery></Gallery>
      case "Contact":
        return <Contact language={language}></Contact>
      case "Order":
        return <Order language={language}></Order>
      default:
        console.log("Switch component failure")
        window.alert("Runtime error, please refresh the page.")
        break;
    }
  }

  return (
    <div className="App">
      <Navbar language={language} activeLink={activeLink} setActiveLink={setActiveLink}></Navbar>
      <LangSwitcher language={language} setLanguage={setLanguage}></LangSwitcher>
      {render()}
      <Footer></Footer>
    </div>
  );
}

export default App;
