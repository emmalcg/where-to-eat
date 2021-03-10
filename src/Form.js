import { useState } from 'react';
import Checkbox from './Checkbox.js';
import firebase from './firebase.js';

function Form() {

    const [restaurantName , setRestaurantName] = useState('');
    
    const [foodFlavours , setFoodFlavours] = useState([
        {name: 'sour', value: false},
        {name: 'refreshing', value: false},
        {name: 'savory', value: false},
        {name: 'spicy', value: false},
        {name: 'sweet', value: false},
    ]);

    const [foodTypes , setFoodTypes] = useState([
        {name: 'snacks', value: false},
        {name: 'vegetables', value: false},
        {name: 'soup', value: false},
        {name: 'BBQ', value: false},
        {name: 'noodles', value: false},
        {name: 'burger', value: false},
        {name: 'pizza', value: false},
        {name: 'meat', value: false},
        {name: 'dessert', value: false},
        {name: 'dumplings', value: false},
        {name: 'sandwich', value: false},
        {name: 'seafood', value: false},
    ]);

    const [wineRadio, setWineRadio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const restaurant = {}

        restaurant.name = restaurantName;

        const filteredFlavours = foodFlavours.filter((flavour) => {
            return flavour.value === true;
        });

        restaurant.flavours = filteredFlavours.map((flavour) => {
            return flavour.name;
        })

        const filteredFoodTypes = foodTypes.filter((foodType) => {
            return foodType.value === true;
        });

        restaurant.foodTypes = filteredFoodTypes.map((foodType) => {
            return foodType.name;
        })

        restaurant.wine = undefined;

        if (wineRadio === 'yesWine') {
            restaurant.wine = true
        } else {
            restaurant.wine = false;
        }

        const dbRef = firebase.database().ref();

        console.log(restaurant.flavours.length);

        if (restaurant.flavours.length === 0 && restaurant.foodTypes.length === 0) {
            alert('please select at least one Flavour and one Type of Food')
        }
        else if (restaurant.flavours.length === 0) {
            alert('please select at least one Flavour')
        } 
        else if (restaurant.foodTypes.length === 0) {
            alert('please select at least one Type of Food')
        } 
        else {
            dbRef.push(restaurant);

            setRestaurantName('');

            setFoodFlavours([
                {name: 'sour', value: false},
                {name: 'refreshing', value: false},
                {name: 'savory', value: false},
                {name: 'spicy', value: false},
                {name: 'sweet', value: false},
            ])
            setFoodTypes([
                {name: 'snacks', value: false},
                {name: 'vegetables', value: false},
                {name: 'soup', value: false},
                {name: 'BBQ', value: false},
                {name: 'noodles', value: false},
                {name: 'burger', value: false},
                {name: 'pizza', value: false},
                {name: 'meat', value: false},
                {name: 'dessert', value: false},
                {name: 'dumplings', value: false},
                {name: 'sandwich', value: false},
                {name: 'seafood', value: false},
            ]);

            setWineRadio('');
        }
    }

    const handleChoice = (e) => {
        const choice = e.target.value;
        const group = e.target.name;

        if (group === 'flavourChoices') {

            const checkedFoodFlavours = [ ...foodFlavours ];
            let index = 0;
            for (let i = 0; i < checkedFoodFlavours.length; i++) {
                if (checkedFoodFlavours[i].name === choice) {
                    index = i;
                }
            }
            checkedFoodFlavours[index].value = !checkedFoodFlavours[index].value;
            setFoodFlavours(checkedFoodFlavours);
        } 

        if (group === 'foodTypeChoices') {
            const checkedFoodTypes = [ ...foodTypes ];
            let index = 0;
            for (let i = 0; i < checkedFoodTypes.length; i++) {
                if (checkedFoodTypes[i].name === choice) {
                    index = i;
                }
            }
            checkedFoodTypes[index].value = !checkedFoodTypes[index].value;

            setFoodTypes(checkedFoodTypes);
        } 
    }

    return (
            <form id="form" onSubmit={handleSubmit}>
                <div className="formTitle">
                    <legend>add a restaurant</legend>
                </div>

                <div className="questionContainer nameInput" >
                    <label 
                    htmlFor="restaurantName" 
                    className="restaurantName">
                        <p>Restaurant Name</p>
                    </label>
                    <input type="text" 
                    name="restaurantName" 
                    id="restaurantName" 
                    onChange={(e)=>{
                        setRestaurantName(e.target.value);
                    }}
                    value={restaurantName}
                    required
                    />
                </div>

                <fieldset className="questionContainer kindsOfFlavours">
                    <div>
                        <legend>Kind of Flavours</legend>
                    </div>
                    {
                        foodFlavours.map((foodFlavour) => {
                            return (
                                <Checkbox
                                    key={foodFlavour.name}
                                    id={foodFlavour.name}
                                    name={'flavourChoices'}
                                    checked={foodFlavour.value}
                                    onChange={handleChoice}
                                    value={foodFlavour.name}
                                    text={foodFlavour.name}
                                    htmlFor={foodFlavour.name}
                                />
                            )
                        })
                    }
                </fieldset>

                <fieldset className="questionContainer typesOfFood">
                    <div>
                        <legend>Types of Food</legend>
                    </div>
                    {
                        foodTypes.map((foodType) => {
                            return (
                                <Checkbox
                                    key={foodType.name}
                                    id={foodType.name}
                                    name={'foodTypeChoices'}
                                    checked={foodType.value}
                                    onChange={handleChoice}
                                    value={foodType.name}
                                    text={foodType.name}
                                    htmlFor={foodType.name}
                                />
                            )
                        })
                    }
                </fieldset>

                <fieldset className="questionContainer wineQuestion">
                    <div>
                        <legend>Natural Wine</legend>
                    </div>
                    <input 
                        type="radio" 
                        id="yesWine" 
                        value="yesWine"
                        name="wine"
                        checked={wineRadio === 'yesWine'}
                        onChange={(e) => { setWineRadio(e.target.value)}}
                        required
                    />
                    <label htmlFor="yesWine">Yes</label>

                    <input 
                        type="radio" 
                        id="noWine"
                        value="noWine"
                        name="wine"
                        checked={wineRadio === 'noWine'}
                        onChange={(e) => { setWineRadio(e.target.value)}}
                    />
                    <label htmlFor="noWine">No</label>
                </fieldset>

                <button type="submit">submit</button>
            </form>
    )
}

export default Form;
