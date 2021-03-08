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
            flavours: restaurantData[restaurantKey].flavours.split(' , '),
            foodType: restaurantData[restaurantKey].foodType.split(' , '),
          })
        }
        setRestaurants(restaurantList);
        console.log(restaurantList);

      })
    }, [])

  return (
    <div className="wrapper">
      <Header />
      <ul>
        {
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard 
                key={ restaurant.uniqueKey }
                name={ restaurant.name }
                wine={ restaurant.wine ? 'natural wine' : null }
                flavours={ restaurant.flavours.map((flavour) => {
                  return (
                    <p>{ flavour }</p>
                  )
                }) }
                foodType={ restaurant.foodType.map((type) => {
                  return (
                    <p>{ type }</p>
                  )
                }) }
              />
            )
          })
        } 
      </ul>

      <Form />
    
      <Footer />
    </div>

    )

}






//useEffect Hook
  //reference firebase database and save it in a var
  //use firebase .on() method to listen for changes

  //use a for in loop to loop through firebase data and store the data within an array

  //use updater function from destructuring state to update state with the array of restaurant objects 

  //user input data will be stored in fire base and look like this : 
  //uniqueKey: {
   //     name: `Sugo`,
      //  wine: false,
     //   food: [`pasta`, `sandwich`],
     //   flavour: [`warm`]
 //   }

 //handle change event for form inputs 
 //tell react the state is changing in the form 

 //submit event handler
    // push the values from the form into the state variable to the firebase database 

    //heading: where 2 eat! 
    
    //text: submit your recommendation of where to eat in the city
    //button that allows use to start their input of restaurant recommendations 
    //listen to the button click event to scroll to the form section

    
    //map through restaurant array in state and display restaurants and information to page in <ul>
    
    
    
    

    //form html 
    // bind user inputs to the state 
  //text input : restaurant name 

  //radio button: natural wine? Y/N 

  //checkbox input: what food is good here? type: snacks, vegetables, soup, noodles, burger, pizza, pasta, dumplings, seafood 

  //checkbox input: what kind of flavours does this restaurant satisfy?  sour, light/refreshing, warm/comfort, spicy, sweet 

export default App;
