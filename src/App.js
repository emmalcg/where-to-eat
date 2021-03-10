import './App.css';
//import firebase
import firebase from './firebase.js';
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard.js';
import Header from './Header.js';
import Form from './Form.js';
import Footer from './Footer.js'

//initialize a state for firebase for restaurants 
// initialize a state for user input on form

function App() {
  const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
      const dbRef = firebase.database().ref();

      dbRef.on('value', (data) => {
        const restaurantData = data.val();
        // console.log(restaurantData);

        const restaurantList = [];


        for (let restaurantKey in restaurantData) {
          restaurantList.push({
            uniqueKey: restaurantKey,
            name: restaurantData[restaurantKey].name,
            wine: restaurantData[restaurantKey].wine,
            flavours: restaurantData[restaurantKey].flavours,
            foodTypes: restaurantData[restaurantKey].foodTypes,
          })
        }
        setRestaurants(restaurantList);

      })
    }, [])
    console.log(restaurants);
  return (
    <div className="wrapper">
      <Header />

      <RestaurantCard
        restaurantInfo={restaurants}
        />
        
      <Form />
    
      <Footer />
    </div>

    )

}


export default App;
