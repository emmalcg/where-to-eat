import { useState } from 'react';
import Checkbox from './Checkbox.js';
// import Radio from './Radio.js';

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

    const [wineRadio, setWineRadio] = useState('');

    const submitData = (e) => {
        e.preventDefault();

        const selectedRestaurant = restaurantName;

        const filteredFlavours = foodFlavours.filter((flavour) => {
            return flavour.value === true;
        });

        const selectedFlavours = filteredFlavours.map((flavour) => {
            return flavour.name;
        })

        const filteredFoodTypes = foodTypes.filter((foodType) => {
            return foodType.value === true;
        });

        const selectedFoodTypes = filteredFoodTypes.map((foodType) => {
            return foodType.name;
        })

        let selectedWine;

        if (wineRadio === 'yesWine') {
            selectedWine = true
        } else {
            selectedWine =false;
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
                                    onChange={handleChoice}
                                    value={foodFlavour.name}
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
                                    onChange={handleChoice}
                                    value={foodType.name}
                                    text={foodType.name}
                                    htmlFor={foodType.name}
                                />
                            )
                        })
                    }
                </div>

                <div className="questionContainer">
                    <p>Natural Wine</p>
                    <input 
                        type="radio" 
                        id="yesWine" 
                        value="yesWine"
                        name="wine"
                        checked={wineRadio === 'yesWine'}
                        onChange={(e) => { setWineRadio(e.target.value)}}
                    />
                    <label htmlFor="yesWine">Yes</label>

                    <input 
                        type="radio" 
                        id="noWine"
                        value="noWine"
                        name="wine"
                        checked={wineRadio === 'noWine'}
                        onChange={(e) => {setWineRadio(e.target.value)}}
                    />
                    <label htmlFor="noWine">No</label>
                </div>

                <button type="submit" onClick={submitData}>submit</button>
            
            </form>
    )
}

export default Form;