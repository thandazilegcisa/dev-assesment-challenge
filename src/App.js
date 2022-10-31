import "./App.css"
import Header from "./components/Header.js";
import HeroSection from "./components/HeroSection.js";

function App() {

  return (
    <div className="appComponentContainer">
      <Header/>
      
      <button className="aboutButton"> About </button>
      <svg className="aboutArrow"width="18" height="112" viewBox="0 0 18 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 112L17.6603 97H0.339746L9 112ZM7.5 0L7.5 98.5H10.5L10.5 0L7.5 0Z" fill="black"/>
      </svg>

      <HeroSection/>
    </div>
  );
}

export default App;