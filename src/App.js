import './App.css';
//import firebase
import firebase from './firebase.js';
import RestaurantCard from './components/RestaurantCard.js'
import Header from './components/Header.js';
import Form from './components/Form.js';

//initialize a state for firebase for restaurants 
// initialize a state for user input on form

function App() {
return (
  <div className="wrapper">
    <Header />
    <ul>
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
      <RestaurantCard  />
    </ul>
    <Form />
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
