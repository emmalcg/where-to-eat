// import Select from 'react-select'
import {useState} from 'react';

function Filter({flavours, types, wines}) {

    // console.log(flavours);
    const flavourChoices = flavours.map(flavour => ({
        "value": flavour,
        "label" : flavour
    }))

    const typeChoices = types.map(type => ({
        "value" : type,
        "label" : type
    }))

    const wineChoices = wines.map(wine => ({
        "value" : wine,
        "label" : wine
    }))
    
    const [flavourSelection, setFlavourSelection] = useState('Flavour');

    const [foodTypeSelection, setFoodTypeSelection] = useState('Food Type');

    const [wineSelection, setWineSelection] = useState('Natural Wine?');

    const handleFilter = (e) => {
        e.preventDefault();
        // filterRestaurants()
    }

    return (
    <div className="options">

        <form className="filterContainer" onSubmit="handleFilter">
            <label className="sr-only" htmlFor="flavourSelection">Choose A Flavour</label>
    
                <select id ="flavourSelection"
                    onChange={(e) => {setFlavourSelection(e.target.value)}}
                    value={flavourSelection}
                >
                    <option value='Flavour' disabled>Flavour</option>
                    {flavourChoices.map(({value, label}) => (
                        <option
                        key={value}
                        value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>
    
            <label className="sr-only" htmlFor="foodTypeSelection">Choose a Type of Food</label>
                <select id ="foodTypeSelection"
                    onChange={(e) => {setFoodTypeSelection(e.target.value)}}
                    value={foodTypeSelection}
                >
                    <option value='Food Type' disabled>Food Type</option>
                    {typeChoices.map(({value, label}) => (
                        <option
                        key={value}
                        value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>
    
                <label className="sr-only" htmlFor="wineSelection">Do you want Natural Wine?</label>
                <select id="wineSelection"
                    onChange={(e) => {setWineSelection(e.target.value)}}
                    value={wineSelection}
                >
                    <option value='Natural Wine?' disabled>Natural Wine?</option>
                    {wineChoices.map(({value, label}) => (
                        <option
                        key={value}
                        value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>

                <button>Search</button>
        </form>

        <a href="#form">add a restaurant</a>
    </div>
    
    )
} 

export default Filter;