import './App.css';
import firebase from './firebase.js';
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard.js';
import Header from './Header.js';
import Filter from './Filter.js';
import Form from './Form.js';
import Footer from './Footer.js'

function App() {
  const flavours = [
    'sour',
    'refreshing',
    'savory',
    'spicy',
    'sweet'
  ]
  const types = [
    'snacks',
    'vegetables',
    'soup',
    'BBQ',
    'noodles',
    'burger',
    'pizza',
    'meat',
    'dessert',
    'dumplings',
    'sandwich',
    'seafood'
  ]
  const wineChoices = [
    'shoe me the wine!',
    'no wine'
  ]
  const [restaurants, setRestaurants] = useState([]);
  
    useEffect(() => {
      const dbRef = firebase.database().ref();
<<<<<<< HEAD

=======
      
>>>>>>> 739099e9ba518f3494fc60ca7d5a08e72c1f1699
      dbRef.on('value', (data) => {
        const restaurantData = data.val();

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
<<<<<<< HEAD

        const sort = (property) => {
          const sortOrder = 1;
=======
        
        const sort = (property) => {
          let sortOrder = 1;
>>>>>>> 739099e9ba518f3494fc60ca7d5a08e72c1f1699

          if(property[0] ==='-') {
            sortOrder = -1;
            property = property.substr(1);
          }

          return function (a,b) {
<<<<<<< HEAD
            if(sortOrder == -1) {
=======
            if(sortOrder === -1) {
>>>>>>> 739099e9ba518f3494fc60ca7d5a08e72c1f1699
              return b[property].localCompare(a[property]);
            }else{
              return a[property].localeCompare(b[property]);
            }
          }
        }

        restaurantList.sort(sort("name"));

        setRestaurants(restaurantList);

      })
    }, [])

  return (
    
    <div>
      <Header />
      <div className="wrapper">
        <main>
          <Filter 
          flavours={flavours}
          types={types}
          wines={wineChoices}
          />
        <RestaurantCard
          restaurantInfo={restaurants}
          />
        <Form />
        </main>
      </div>
      <Footer />
    </div>

    )

}


export default App;