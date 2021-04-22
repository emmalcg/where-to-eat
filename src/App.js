import './App.css';

// import { useEffect, useState } from 'react';
import {RestaurantProvider} from './RestaurantContext';
import Header from './Header';
import FilterComponent from './FilterComponent';
import RestaurantList from './RestaurantList'
import Form from './Form';
import Footer from './Footer'

function App() {

  return (
    
    <div>
      <Header />
      <div className="wrapper">
        <main>
          <RestaurantProvider>
            <FilterComponent/>
            <RestaurantList/>
            <Form />
          </RestaurantProvider>
        </main>
      </div>
      <Footer />
    </div>

    )

}


export default App;