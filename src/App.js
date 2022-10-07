import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoHeader from "./components/InfoHeader";
import Shortener from "./components/Shortener";
import Info from "./components/Info";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [FirstMenu, setFirstMenu] = useState(true);
  const [secondMenu, setSecondMenu] = useState(false);
  const [showImage, setShowImage] = useState(true)
  const menuControl = ()=>{
      setShowMenu(true)
      setSecondMenu(true)
      setFirstMenu(false)
      setShowImage(false)
  }

  const secondControl = ()=>{
    setShowMenu(false)
    setSecondMenu(false)
    setFirstMenu(true)
    setShowImage(true)
}

  

  return (
    <div className="font-poppin">
      <Header order={menuControl} first={FirstMenu} second={secondMenu} secondControl={secondControl} ></Header>
      <div className="flex flex-col lg:flex-row-reverse mb-32">
        <HeroSection menu={showMenu} showImage={showImage}></HeroSection>
        <InfoHeader></InfoHeader>
      </div>
      <div className="bg-Gray bg-opacity-40 py-2 flex flex-col justify-center items-center">
        <Shortener></Shortener>
        <Info></Info>
      </div>
      <PreFooter></PreFooter>
      <Footer></Footer>
    </div>
  );
}

export default App;
