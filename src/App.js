import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GlobalStyle from './globalStyles';
import Info from './components/Info/Info';
import { sliderData } from './assets';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';

const App = () => {
   return (
      <div className="App">
         <GlobalStyle />
         <Header />
         <main>
            <Hero slides={sliderData} />
            <Info />
            <About />
            <Features />
         </main>
         <Footer />
      </div>
   );
};

export default App;
