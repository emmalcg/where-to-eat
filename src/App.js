import './App.css';

// import { useEffect, useState } from 'react';
import {RestaurantProvider} from './context/RestaurantContext';
import {FilterProvider} from './context/FilterContext';
import {WineFilterProvider} from './context/WineFilterContext';
import Header from './components/Header';
import FilterComponent from './components/FilterComponent';
import RestaurantList from './components/RestaurantList'
import AddForm from './components/AddForm';
import Footer from './components/Footer'
import MobileFilter from './components/MobileFilter';

function App() {

  return (
    
    <div>
      <MobileFilter />
      <Header />
      <div className="wrapper">
        <main>
          <RestaurantProvider>
            <FilterProvider> 
            <WineFilterProvider>
              <FilterComponent/>
              <RestaurantList/>
              <AddForm />

            </WineFilterProvider>
            </FilterProvider>
          </RestaurantProvider>
        </main>
      </div>
      <Footer />
    </div>

    )

}


export default App;