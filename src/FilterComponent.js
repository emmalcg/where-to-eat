import Dropdown from './Dropdown';
import {useState} from 'react';
import Checkbox from './Checkbox';
import _ from "lodash";

function FilterComponent() {

    const flavours = [
        'Sour',
        'Refreshing',
        'Savory',
        'Spicy',
        'Sweet'
    ]
    const types = [
        'Snacks',
        'Vegetables',
        'Soup',
        'BBQ',
        'Noodles',
        'Burger',
        'Pizza',
        'Meat',
        'Dessert',
        'Dumplings',
        'Sandwich',
        'Seafood'
    ]
    const wines = [
        'show me the wine!',
        'no wine'
    ]

    const [flavourFilter, setFlavourFilter] = useState(flavours.map(flavour => ({
        "value": false,
        "name" : flavour
    })))

    const [typeFilter, setTypeFilter] = useState(types.map(type => ({
        "value" : false,
        "name" : type
    })))

    const [wineFilter, setWineFilter] = useState(wines.map(wine => ({
        "value" : false,
        "name" : wine
    })))

    const filteredList = flavourFilter.filter(flavour => {
        return flavour.value === true
    }).concat(typeFilter.filter(type => {
        return type.value === true
    }))

    const handleChoice = (e) => {
        const choice = e.target.value;
        
        const group = e.target.name;
        
        if (group === 'flavourFilter') {

            const checkedFlavourFilter = _.cloneDeep(flavourFilter);
            
            let index = 0;
            for (let i = 0; i < checkedFlavourFilter.length; i++) {
                if (checkedFlavourFilter[i].name === choice) {
                    index = i;
                }
            }
            checkedFlavourFilter[index].value = !checkedFlavourFilter[index].value;
            setFlavourFilter(checkedFlavourFilter);
        } 

        if (group === 'typeFilter') {
            const checkedTypeFilter = _.cloneDeep(typeFilter);
            let index = 0;
            for (let i = 0; i < checkedTypeFilter.length; i++) {
                if (checkedTypeFilter[i].name === choice) {
                    index = i;
                }
            }
            checkedTypeFilter[index].value = !checkedTypeFilter[index].value;

            setTypeFilter(checkedTypeFilter);
        } 
    }

    const resetFilter = () => {
        setFlavourFilter(flavours.map(flavour => ({
        "value": false,
        "name" : flavour
        })))
        setTypeFilter((types.map(type => ({
        "value" : false,
        "name" : type
        }))))
    }

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1)
    }

    return (
    <div className="filter">
        <div className={`dropdownContainer ${filteredList.length > 0 && "buttons"}`}>
            <Dropdown 
                title='Flavours'
                listItems={
                    <>
                    {flavourFilter.map(flavour => (
                            <li 
                            className="checkboxContainer"
                            key={`${flavour.name}Container`}
                            >
                                <Checkbox
                                    key={`${flavour.name}1`}
                                    id={flavour.name}
                                    name='flavourFilter'
                                    checked={flavour.value}
                                    onChange={handleChoice}
                                    value={flavour.name}
                                    text={flavour.name}
                                    htmlFor={flavour.name}
                                />
                            </li>
                        ))}
                    </>
                    }

            />

            <Dropdown 
                title='Types Of Food'
                listItems={
                        <>
                        {typeFilter.map(type => (
                                <li 
                                className="checkboxContainer"
                                key={`${type.name}Container`}
                                >
                                    <Checkbox
                                        key={`${type.name}1`}
                                        id={type.name}
                                        name='typeFilter'
                                        checked={type.value}
                                        onChange={handleChoice}
                                        value={type.name}
                                        text={type.name}
                                        htmlFor={type.name}
                                    />
                                </li>
                            ))
                        }
                        </>
                    }
            />
        </div>
        {
            filteredList.length > 0 &&
            
            <div className="deleteContainer">
                <p>Refine By</p>
                <ul>
                    {
                        flavourFilter.filter(flavour => {
                            return flavour.value === true
                        })
                        .map(flavour => {
                            return (
                                <li 
                                    className="dbContainer"
                                    key={`${flavour.name}Delete`}
                                    >
                                        <Checkbox
                                            key={`${flavour.name}DeleteButton`}
                                            id={flavour.name}
                                            name='flavourFilter'
                                            checked={flavour.value}
                                            onChange={handleChoice}
                                            value={flavour.name}
                                            text={flavour.name}
                                            htmlFor={flavour.name}
                                        />
                                </li>
                            )
                        }) 
                    }

                    {
                        typeFilter.filter(type => {
                            return type.value === true
                        })
                        .map(type => {
                            return (
                                <li 
                                    className="dbContainer"
                                    key={`${type.name}Delete`}
                                    >
                                        <Checkbox
                                            key={`${type.name}DeleteButton`}
                                            id={type.name}
                                            name='typeFilter'
                                            checked={type.value}
                                            onChange={handleChoice}
                                            value={type.name}
                                            text={type.name}
                                            htmlFor={type.name}
                                        />
                                </li>
                            )
                        }) 
                    }
                </ul>
                <button className="clearAll" onClick={resetFilter}>Clear All</button>
            </div>
        }

    </div>
    )
} 

export default FilterComponent;