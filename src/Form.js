import { useState } from 'react';
import Checkbox from './Checkbox.js';

function Form() {

    const [restaurantName , setRestaurant] = useState('');
    
    const [foodFlavours , setFoodFlavours] = useState([
        {name: 'sour', value: false},
        {name: 'refreshing', value: false},
        {name: 'warm', value: false},
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
        {name: 'dessert', value: false},
        {name: 'dumplings', value: false},
        {name: 'sandwiches', value: false},
        {name: 'seafood', value: false},
    ]);

    const submitData = (event) => {
        event.preventDefault();

        // const selectedFlavours = [];
        // const selectedFoodTypes = [];

        // for (let key in flavours) {
        //     if (flavours[key]) {
        //         selectedFlavours.push(key);
        //         }
        // }
        // for(let key in foodTypes) {
        //     if (foodTypes[key]) {
        //         selectedFoodTypes.push(key);
        //     }
        // }
    }

    const handleChoice = (choice, group, value) => {
        // console.log(group);
        // console.log(choice);
        if (group === 'flavourChoices') {

            const checkedFoodFlavours = [ ...foodFlavours ];
            console.log(checkedFoodFlavours);
            let index = 0;
            for (let i = 0; i < checkedFoodFlavours.length; i++) {
                if (checkedFoodFlavours[i].name === choice) {
                    index = i;
                }
            }
            checkedFoodFlavours[index].value = !checkedFoodFlavours[index].value;
            setFoodFlavours(checkedFoodFlavours);
            // console.log(checkedFoodFlavours);
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
            <form id="form" action="submit">
                <legend>add a restaurant</legend>

                <div className="questionContainer nameInput">
                    <label htmlFor="restaurantName" className="restaurantName"><p>Restaurant Name</p></label>
                    <input type="text" name="restaurantName" id="restaurantName" onChange={(event)=>{
                        setRestaurant(event.target.value);
                    }
                    }
                    />
                </div>

                <div className="questionContainer">
                    <p>Kind of Flavours</p>
                    
                    {
                        foodFlavours.map((foodFlavour) => {
                            return (
                                <Checkbox
                                    key={foodFlavour.name}
                                    id={foodFlavour.name}
                                    name={'flavourChoices'}
                                    defaultChecked={foodFlavour.value}
                                    onChange={(event) => {
                                    handleChoice(event.target.id, event.target.name, event.target.value)
                                    }}
                                    value={foodFlavour.value}
                                    text={foodFlavour.name}
                                    htmlFor={foodFlavour.name}
                                />
                            )
                        })
                    }
                </div>

                <div className="questionContainer">
                    <p>Types of Food</p>
                    {
                        foodTypes.map((foodType) => {
                            return (
                                <Checkbox
                                    key={foodType.name}
                                    id={foodType.name}
                                    name={'foodTypeChoices'}
                                    defaultChecked={foodType.value}
                                    onChange={(event) => {
                                    handleChoice(event.target.id, event.target.name)
                                    }}
                                    value={foodType.value}
                                    text={foodType.name}
                                    htmlFor={foodType.name}
                                />
                            )
                        })
                    }
                </div>

                <div className="questionContainer">
                    <p>Natural Wine</p>
                    <input type="radio" id="yesWine" value="yesWine" name="wine"/>
                    <label htmlFor="yesWine">Yes</label>

                    <input type="radio" id="noWine" value="noWine" name="wine"/>
                    <label htmlFor="noWine">No</label>
                </div>

                <button type="submit" onClick={submitData}>submit</button>
            
            </form>
    )
}

export default Form;