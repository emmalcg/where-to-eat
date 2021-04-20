// import Select from 'react-select'
import {useState, useEffect} from 'react';
import Checkbox from './Checkbox';
import _ from "lodash";

function FilterComponent({flavours, types, wines}) {

    const [flavourOpen, setFlavourOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const [wineOpen, setWineOpen] = useState(false);

    useEffect(() => {
        if (flavourOpen === true) {
            setTypeOpen(false)
        }
        if(typeOpen === true) {
            setFlavourOpen(false)
            console.log()
        }


    }, [typeOpen, flavourOpen])

    // useEffect(() => {
    //     const handleClick = (e) => {
    //         const isDropdownClicked = dropdownRef.current && dropdownRef.current.contains(e.target);
    //         const isButtonClicked = buttonRef.current && buttonRef.current.contains(e.target);

    //         if (isDropdownClicked || isButtonClicked) {
    //             return
    //         }
    //         setFlavourOpen(false);
    //     };

    //     document.addEventListener('mousedown', handleClick);
    //     document.addEventListen('touchstart', handleClick);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClick);
    //         document.removeEventListen('touchstart', handleClick)
    //     }

        
    // }, [dropdownRef, buttonRef])
    // console.log(flavours);
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
    
    // const [flavourSelection, setFlavourSelection] = useState('Flavour');

    // const [foodTypeSelection, setFoodTypeSelection] = useState('Food Type');

    // const [wineSelection, setWineSelection] = useState('Natural Wine?');

    // const handleFilter = (e) => {
    //     e.preventDefault();
    //     // filterRestaurants()
    // }

    return (
    <div className="filter">

        <button onClick={() => {setFlavourOpen(!flavourOpen)}} className="filterButton">Flavours</button>

        {
            flavourOpen === true 
            ? <div className="options">
                { flavourFilter.map((flavour) => {
                    return (
                        <div className="checkboxContainer">
                            <Checkbox
                                key={flavour.name + 1}
                                id={flavour.name}
                                name={'flavourFilter'}
                                checked={flavour.value}
                                onChange={handleChoice}
                                value={flavour.name}
                                text={flavour.name}
                                htmlFor={flavour.name}
                            />
                        </div>
                    )
                })
                }
                <button>Apply</button>
            </div> 
            : null
        }
        
        {/* {flavourOpen 
        ? <>
        
        <div ref={flavourDropRef} className="filterDropdown">
            dropdown content goes here
        </div>
        <div className="filterDropdownActions"></div>
        <button onClick={handleApply} className="filterDropdownButton">Apply</button>
        </>

        : null
        } */}

        <button onClick={() => {setTypeOpen(!typeOpen)}} className="filterButton">Food Types</button>
        {
            typeOpen === true 
            ? <div className="options">
                { typeFilter.map((type) => {
                    return (
                        <div className="checkboxContainer">
                            <Checkbox
                                key={type.name + 1}
                                id={type.name}
                                name={'typeFilter'}
                                checked={type.value}
                                onChange={handleChoice}
                                value={type.name}
                                text={type.name}
                                htmlFor={type.name}
                            />
                        </div>
                    )
                })
                }
                <button>Apply</button>
            </div>
            : null
        }
        

        <button onClick={() => {setWineOpen(!wineOpen)}} className="filterButton">Natural Wine?</button>

        {/* <form className="filterContainer" onSubmit={handleFilter}>
            <label className="sr-only" htmlFor="flavourSelection">Choose A Flavour</label>
    
                <select id ="flavourSelection"
                    onChange={(e) => {setFlavourSelection(e.target.value)}}
                    value={flavourSelection}
                >
                    <option value='Flavour'>Flavour - All</option>
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
                    <option value='Food Type'>Food Type - All</option>
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
                    <option value='Natural Wine?'>Natural Wine? - All</option>
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

        <a href="#form">add a restaurant</a> */}
    </div>
    
    )
} 

export default FilterComponent;