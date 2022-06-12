import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured.js';
import './home.css';
import PropertyList from '../../components/propertyList/PropertyList';
import FeatureProperties from '../../components/featureProperties/FeatureProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/footer/Footer';



function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
          <Featured/>
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Homes guests love</h1>
          <FeatureProperties/>
          <MailList/>
          <Footer/>
      </div>
    </div>
  );
}

export default Home;
